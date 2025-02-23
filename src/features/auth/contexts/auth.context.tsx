import {
  getTokenDataFromStorage,
  getUserDataFromStorage,
  removeDataFromStorage,
  setTokenDataToStorage,
  setUserDataToStorage,
} from "@/utils/localstorage";
import { LoginDataTypes, UserDataTypes, UserTokenTypes } from "@/types/auth";
import { createContext, useState, useContext, useEffect, useCallback } from "react";
import { oauthApi } from "@/utils/api";

export const initialUserData: UserDataTypes = {
  id: 0,
  name: "",
  email: "",
  created_at: "",
  updated_at: "",
};

export const initialTokenData: UserTokenTypes = {
  token_type: "Bearer",
  expires_in: null,
  access_token: null,
  refresh_token: null,
};

interface ProviderProps {
  user: UserDataTypes | null;
  token: UserTokenTypes | null;
  setUserData: (userData: UserDataTypes | null) => void;
  setTokenData: (userToken: UserTokenTypes | null) => void;
  removeUser: () => void;
  getTokenFromServer: (data: LoginDataTypes) => Promise<void>;
  getUserFromServer: () => Promise<void>;
}

export const AuthContext = createContext<ProviderProps>({
  user: initialUserData,
  token: initialTokenData,
  setUserData: () => {},
  setTokenData: () => {},
  removeUser: () => {},
  getTokenFromServer: async () => {},
  getUserFromServer: async () => {},
});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const storedUser = getUserDataFromStorage();
  const storedToken = getTokenDataFromStorage();

  const [user, setUser] = useState<UserDataTypes | null>(storedUser);
  const [token, setToken] = useState<UserTokenTypes | null>(storedToken);

  const persistTokenData = useCallback((userToken: UserTokenTypes | null) => {
    if (userToken) {
      setTokenDataToStorage(userToken);
    }
  }, []);

  const persistUserData = useCallback((userData: UserDataTypes | null) => {
    if (userData) {
      setUserDataToStorage(userData);
    }
  }, []);

  const setTokenData = (userToken: UserTokenTypes | null) => {
    setToken(userToken);
    persistTokenData(userToken);
  };

  const setUserData = (userData: UserDataTypes | null) => {
    setUser(userData);
    persistUserData(userData);
  };

  const removeUser = () => {
    setToken(null);
    setUser(null);
    removeDataFromStorage();
  };

  const getTokenFromServer = async (data: LoginDataTypes) => {
    const userToken = await oauthApi.post("oauth/token", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    setTokenData(userToken.data);
  };
  const getUserFromServer = async () => {
    const userData = await oauthApi.get("api/user");
    setUserData(userData.data);
  };

  useEffect(() => {
    if (token?.access_token) {
      setTokenData(getTokenDataFromStorage());
    }
  }, [token?.access_token]);

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        setUserData,
        setTokenData,
        removeUser,
        getTokenFromServer,
        getUserFromServer,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
