import { ThemeProvider as ThemeProviderStyledComponents } from "styled-components";
import { ConfigProvider, theme } from "antd";
import { PropsWithChildren } from "react";
import THEME from "./theme";

export default function ThemeProvider({ children }: PropsWithChildren<{}>) {
  const { token } = theme.useToken();
  const mergedTheme = {
    antd: {
      token: {
        ...token,
        ...THEME.token,
      },
      components: THEME.components,
    },
  };

  return (
    <ConfigProvider theme={THEME}>
      <ThemeProviderStyledComponents theme={mergedTheme}>
        {children}
      </ThemeProviderStyledComponents>
    </ConfigProvider>
  );
}
