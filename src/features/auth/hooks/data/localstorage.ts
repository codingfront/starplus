import { UserDataTypes, UserTokenTypes } from "@/types/auth";

const LOCAL_STORAGE_USER_KEY = "user";
const LOCAL_STORAGE_TOKEN_KEY = "token";

function getFromStorage<T>(key: string): T | null {
  try {
    const storedItem = localStorage.getItem(key);
    return storedItem ? JSON.parse(storedItem) : null;
  } catch (error) {
    console.error(`Failed to parse item from localStorage for key: ${key}`, error);
    return null;
  }
}

function setToStorage<T>(key: string, data: T | null): void {
  try {
    if (data) {
      localStorage.setItem(key, JSON.stringify(data));
    } else {
      localStorage.removeItem(key);
    }
  } catch (error) {
    console.error(`Failed to set item to localStorage for key: ${key}`, error);
  }
}

export function setUserDataToStorage(userData: UserDataTypes | null) {
  setToStorage(LOCAL_STORAGE_USER_KEY, userData);
}

export function getUserDataFromStorage(): UserDataTypes | null {
  return getFromStorage<UserDataTypes>(LOCAL_STORAGE_USER_KEY);
}

export function getTokenDataFromStorage(): UserTokenTypes | null {
  return getFromStorage<UserTokenTypes>(LOCAL_STORAGE_TOKEN_KEY);
}

export function setTokenDataToStorage(userToken: UserTokenTypes | null) {
  setToStorage(LOCAL_STORAGE_TOKEN_KEY, userToken);
}

export function removeDataFromStorage() {
  localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
  localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY);
}
