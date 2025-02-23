import { UserDataTypes, UserTokenTypes } from "@/types/auth";

export const LOCAL_STORAGE_USER_KEY = "user";
export const LOCAL_STORAGE_TOKEN_KEY = "token";

export function setUserDataToStorage(userData: UserDataTypes | null) {
  localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(userData));
}
export function getUserDataFromStorage() {
  const storedUser: UserDataTypes | null = localStorage.getItem(LOCAL_STORAGE_USER_KEY)
    ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_USER_KEY) || "{}")
    : null;
  return storedUser;
}
export function getTokenDataFromStorage() {
  const storedToken: UserTokenTypes | null = localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY)
    ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY) || "{}")
    : null;
  return storedToken;
}
export function setTokenDataToStorage(userToken: UserTokenTypes | null) {
  localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, JSON.stringify(userToken));
}

export function removeDataFromStorage() {
  localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY);
  localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
}
