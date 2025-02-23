import { lazy } from "react";
import ROUTE_PATH from "./paths";

const NotFoundPage = lazy(() => import("@/pages/not-found-page"));
const HomePage = lazy(() => import("@/pages/home-page"));
const GenrePage = lazy(() => import("@/pages/genre-page"));
const MoviePage = lazy(() => import("@/pages/movie-page"));
const MoviesByGenrePage = lazy(() => import("@/pages/movies-by-genre-page"));
const RegisterPage = lazy(() => import("@/pages/register-page"));
const LoginPage = lazy(() => import("@/pages/login-page"));
const UserAccountPage = lazy(() => import("@/pages/user-account-page"));
const PrivacyPolicyPage = lazy(() => import("@/pages/privacy-policy-page"));
const TermsOfUsePage = lazy(() => import("@/pages/terms-of-use-page"));

export const publicRoutes = [
  { path: ROUTE_PATH.notFound, component: NotFoundPage },
  { path: ROUTE_PATH.home, component: HomePage },
  { path: ROUTE_PATH.genre, component: GenrePage },
  { path: ROUTE_PATH.moviesByGenre, component: MoviesByGenrePage },
  { path: ROUTE_PATH.movie, component: MoviePage },
  { path: ROUTE_PATH.privacyPolicy, component: PrivacyPolicyPage },
  { path: ROUTE_PATH.termsOfUse, component: TermsOfUsePage },
];

export const protectedRoutes = [
  { path: ROUTE_PATH.userAccount, component: UserAccountPage },
];

export const authRoutes = [
  { path: ROUTE_PATH.register, component: RegisterPage, restricted: true },
  { path: ROUTE_PATH.login, component: LoginPage, restricted: true },
];
