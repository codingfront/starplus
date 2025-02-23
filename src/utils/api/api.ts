import axios from "axios";
import { setupInterceptors } from "./interceptors";

export const api = axios.create({
  baseURL: "https://moviesapi.codingfront.dev/api/v1",
});

export const oauthApi = axios.create({
  baseURL: "https://moviesapi.codingfront.dev/",
});
setupInterceptors();
