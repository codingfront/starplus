import { useIsLogin } from "@/features/auth/hooks/data/use-auth";
import { useProgress } from "@/hooks/use-progress";
import { Navigate } from "react-router";

type PublicRouteProps = {
  children: React.ReactNode;
  redirectPath?: string;
  restricted?: boolean;
};

export default function PublicRoute({
  children,
  redirectPath = "/",
  restricted = false,
}: PublicRouteProps) {
  useProgress();
  const isLogin = useIsLogin();
  if (isLogin && restricted) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
}
