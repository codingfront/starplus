import { Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import PrimaryLayout from "@/features/layouts/primary-layout/components/primary-layout";
import PublicRoute from "./public-route";
import AuthLayout from "@/features/layouts/auth-layout/auth-layout";
import ProtectedRoute from "./protected-route";
import NProgress from "nprogress";
import ScrollToTop from "@/components/scroll-to-top";
import { authRoutes, protectedRoutes, publicRoutes } from "./routes";
import ReloadPrompt from "@/components/reload-prompt/reload-prompt";

function RouteChangeHandler() {
  const location = useLocation();
  useEffect(() => {
    NProgress.start();
    return () => {
      NProgress.done();
    };
  }, [location.pathname]);
  return null;
}

export default function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <RouteChangeHandler />
      <ReloadPrompt />
      <Suspense fallback={null}>
        <Routes>
          {/* Primary Layout - Public Routes */}
          <Route element={<PrimaryLayout />}>
            {publicRoutes.map(({ path, component: Component }) => (
              <Route
                key={path}
                path={path}
                element={
                  <PublicRoute>
                    <Component />
                  </PublicRoute>
                }
              />
            ))}
          </Route>

          {/* Protected Routes */}
          <Route element={<PrimaryLayout />}>
            {protectedRoutes.map(({ path, component: Component }) => (
              <Route
                key={path}
                path={path}
                element={
                  <ProtectedRoute>
                    <Component />
                  </ProtectedRoute>
                }
              />
            ))}
          </Route>

          {/* Auth Layout - Auth Routes */}
          <Route element={<AuthLayout />}>
            {authRoutes.map(({ path, component: Component, restricted }) => (
              <Route
                key={path}
                path={path}
                element={
                  <PublicRoute restricted={restricted}>
                    <Component />
                  </PublicRoute>
                }
              />
            ))}
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
