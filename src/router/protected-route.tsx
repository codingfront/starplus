import { useIsLogin } from "@/features/auth/hooks/data/use-auth";
import { Navigate } from "react-router";
import { useProgress } from "@/hooks/use-progress";

type PrivateRouteProps = {
  children: React.ReactNode;
  redirectPath?: string;
};

export default function PrivateRoute({
  children,
  redirectPath = "/",
}: PrivateRouteProps) {
  const isLogin = useIsLogin();
  useProgress();
  if (!isLogin) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
}
