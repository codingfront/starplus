import { createContext, useState, useContext, useEffect, useCallback } from "react";
import { oauthApi } from "@/utils/api";
import {
  getTokenDataFromStorage,
  getUserDataFromStorage,
  removeDataFromStorage,
  setTokenDataToStorage,
  setUserDataToStorage,
} from "@/features/auth/hooks/data/localstorage";
import { LoginDataTypes, UserDataTypes, UserTokenTypes } from "@/types/auth";

const defaultUserData: UserDataTypes = {
  id: 0,
  name: "",
  email: "",
  created_at: "",
  updated_at: "",
};

const defaultTokenData: UserTokenTypes = {
  token_type: "Bearer",
  expires_in: null,
  access_token: null,
  refresh_token: null,
};

interface AuthContextProps {
  user: UserDataTypes | null;
  token: UserTokenTypes | null;
  logout: () => void;
  fetchToken: (data: LoginDataTypes) => Promise<void>;
  fetchUser: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextProps>({
  user: defaultUserData,
  token: defaultTokenData,
  logout: () => {},
  fetchToken: async () => {},
  fetchUser: async () => {},
});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const storedUser = getUserDataFromStorage();
  const storedToken = getTokenDataFromStorage();

  const [user, setUserState] = useState<UserDataTypes | null>(storedUser);
  const [token, setTokenState] = useState<UserTokenTypes | null>(storedToken);

  const persistToken = useCallback((tokenData: UserTokenTypes | null) => {
    if (tokenData) {
      setTokenDataToStorage(tokenData);
    }
  }, []);

  const persistUser = useCallback((userData: UserDataTypes | null) => {
    if (userData) {
      setUserDataToStorage(userData);
    }
  }, []);

  const setToken = (tokenData: UserTokenTypes | null) => {
    setTokenState(tokenData);
    persistToken(tokenData);
  };

  const setUser = (userData: UserDataTypes | null) => {
    setUserState(userData);
    persistUser(userData);
  };

  const logout = () => {
    setTokenState(null);
    setUserState(null);
    removeDataFromStorage();
  };

  const fetchToken = async (data: LoginDataTypes) => {
    const { data: tokenData } = await oauthApi.post("oauth/token", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    setToken(tokenData);
  };

  const fetchUser = async () => {
    const { data: userData } = await oauthApi.get("api/user");
    setUser(userData);
  };

  useEffect(() => {
    if (token?.access_token) {
      setTokenState(storedToken);
    }
  }, [token?.access_token]);

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        logout,
        fetchToken,
        fetchUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
