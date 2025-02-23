export type RegisterDataTypes = {
  name: string;
  email: string;
  password: string;
};
export type LoginDataTypes = {
  grant_type: "password" | string;
  username: string;
  password: string;
};

export type UserTokenTypes = {
  token_type: "Bearer" | string;
  expires_in: number | null;
  access_token: string | null;
  refresh_token: string | null;
};
export type UserDataTypes = {
  id: number;
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
};
