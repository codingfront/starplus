import { useAuth } from "@/features/auth/contexts/auth.context";

export function useIsLogin() {
  const auth = useAuth();
  return auth.token?.access_token ?? false;
}

export function useToken() {
  const auth = useAuth();
  return auth.token?.access_token;
}
export function useUser() {
  const auth = useAuth();
  return auth.user;
}
export function useUserEmail() {
  const auth = useAuth();
  return auth.user?.email;
}
export function useUserName() {
  const auth = useAuth();
  return auth.user?.name;
}
