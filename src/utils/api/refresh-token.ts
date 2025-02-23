import { oauthApi } from "./api";
import {
  getTokenDataFromStorage,
  setTokenDataToStorage,
  setUserDataToStorage,
} from "../localstorage";
import { UserTokenTypes } from "@/types/auth";

export async function refreshToken(): Promise<UserTokenTypes> {
  try {
    const refreshToken = getTokenDataFromStorage()?.refresh_token;
    if (!refreshToken) throw new Error("No refresh token available");

    const response = await oauthApi.post("oauth/token", {
      refresh_token: refreshToken,
      grant_type: "refresh_token",
    });

    setTokenDataToStorage(response.data);
    return response.data;
  } catch (error) {
    setTokenDataToStorage(null);
    setUserDataToStorage(null);
    throw new Error("Failed to refresh token");
  }
}
