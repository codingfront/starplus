import { useEffect } from "react";
import NProgress from "nprogress";
import { useLocation } from "react-router";

export function useProgress() {
  const location = useLocation();
  useEffect(() => {
    NProgress.done();
  }, [location.pathname]);
}
