import { createRoot } from "react-dom/client";
import { ConfigProvider, App as AntdApp } from "antd";
import ThemeProvider from "@/styles/theme-provider";
import THEME from "@/styles/theme";
import { GlobalStyles } from "@/styles/global-styles";
import Router from "@/router";
import AuthProvider from "@/features/auth/contexts/auth.context";
import GenreProvider from "@/features/genres/contexts/genre.context";
import "@/styles/fonts.module.css";

createRoot(document.getElementById("root")!).render(
  <ConfigProvider theme={THEME}>
    <ThemeProvider>
      <AntdApp>
        <GlobalStyles />
        <AuthProvider>
          <GenreProvider>
            <Router />
          </GenreProvider>
        </AuthProvider>
      </AntdApp>
    </ThemeProvider>
  </ConfigProvider>,
);
