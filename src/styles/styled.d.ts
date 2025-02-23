import "styled-components";
import { AliasToken } from "antd/es/theme/interface";
import { ComponentTokenMap } from "antd/es/theme/interface";
import { ThemeConfig } from "antd";

export interface Pallete extends ThemeConfig {
  token: ThemeConfig["token"] & {
    secondFontFamily?: string;
    customBorderRadius?: string;
    fontSizeHeading1LG?: number;
  };
}

declare module "styled-components" {
  export interface DefaultTheme {
    antd: Pallete;
  }
}
