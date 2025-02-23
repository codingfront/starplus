import { AxiosError, InternalAxiosRequestConfig } from "axios";
import { oauthApi } from "./api";
import {
  getTokenDataFromStorage,
  setTokenDataToStorage,
  setUserDataToStorage,
} from "../localstorage";
import { UserTokenTypes } from "@/types/auth";
import { refreshToken } from "./refresh-token";
import ROUTE_PATH from "@/router/paths";

let refreshTokenRequest: Promise<UserTokenTypes> | null = null;

const addTokenToHeader = (config: InternalAxiosRequestConfig) => {
  const token = `Bearer ${getTokenDataFromStorage()?.access_token}`;
  config.headers.Authorization = token;
  return config;
};

export const setupInterceptors = () => {
  oauthApi.interceptors.request.use(config => addTokenToHeader(config));

  oauthApi.interceptors.response.use(
    response => response,
    async (error: AxiosError) => {
      const originalRequest = error.config as InternalAxiosRequestConfig & {
        _retry?: boolean;
      };
      if (getTokenDataFromStorage()) {
        if (error.response?.status === 401 && !originalRequest?.headers["x-retry"]) {
          if (!refreshTokenRequest) {
            refreshTokenRequest = refreshToken();
          }

          try {
            const newToken = await refreshTokenRequest;
            refreshTokenRequest = null;

            setTokenDataToStorage(newToken);
            originalRequest.headers.Authorization = `Bearer ${newToken.access_token}`;
            originalRequest.headers["x-retry"] = "true";

            return oauthApi(originalRequest);
          } catch (refreshError) {
            refreshTokenRequest = null;
            setTokenDataToStorage(null);
            setUserDataToStorage(null);
            window.location.href = ROUTE_PATH.login;
            return Promise.reject(refreshError);
          }
        }
      }
      return Promise.reject(error);
    },
  );
};
