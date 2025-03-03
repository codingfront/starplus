import { AxiosError, InternalAxiosRequestConfig } from "axios";
import { oauthApi } from "./api";
import {
  getTokenDataFromStorage,
  setTokenDataToStorage,
  setUserDataToStorage,
} from "@/features/auth/hooks/data/localstorage";
import { RedirectStatus, UserTokenTypes } from "@/types/auth";
import { refreshToken } from "./refresh-token";
import ROUTE_PATH from "@/router/paths";

let refreshTokenRequest: Promise<UserTokenTypes> | null = null;

const addTokenToHeader = (config: InternalAxiosRequestConfig) => {
  const token = getTokenDataFromStorage()?.access_token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
};

const logoutUser = (redirectStatus: RedirectStatus) => {
  refreshTokenRequest = null;
  setTokenDataToStorage(null);
  setUserDataToStorage(null);
  const url = new URL(ROUTE_PATH.login, window.location.origin);
  url.searchParams.set("status", redirectStatus);
  window.location.href = url.toString();
};

/**
 * Handles 401 errors by attempting to refresh the token, retrying the request if successful,
 * or logging out the user if the refresh fails.
 */
const handleUnauthorizedError = async (error: AxiosError) => {
  const originalRequest = error.config as InternalAxiosRequestConfig & {
    _retry?: boolean;
  };

  // If the request was already retried and still failed, log out the user.
  if (originalRequest?.headers["x-retry"]) {
    console.warn("401 after token refresh. Logging out...");
    logoutUser("token_expired");
    return Promise.reject(error);
  }

  // If there's a token, attempt to refresh it.
  if (getTokenDataFromStorage()) {
    if (!refreshTokenRequest) {
      refreshTokenRequest = refreshToken();
    }

    try {
      const newToken = await refreshTokenRequest;
      refreshTokenRequest = null;

      // Store the new token and retry the original request.
      setTokenDataToStorage(newToken);
      originalRequest.headers.Authorization = `Bearer ${newToken.access_token}`;
      originalRequest.headers["x-retry"] = "true";

      return oauthApi(originalRequest);
    } catch (refreshError) {
      console.error("Token refresh failed. Logging out...");
      logoutUser("token_expired");
      return Promise.reject(refreshError);
    }
  }

  return Promise.reject(error);
};

export const setupInterceptors = () => {
  oauthApi.interceptors.request.use(addTokenToHeader);
  oauthApi.interceptors.response.use(
    response => response,
    async error => {
      if (error.response?.status === 401) {
        return handleUnauthorizedError(error);
      }
      return Promise.reject(error);
    },
  );
};
