import { theme } from "antd";
import { Pallete } from "./styled";
import { size } from "./breakpoints";

export const MAIN_FONT_FAMILY = "Nunito";
export const SECOND_FONT_FAMILY = "Saira";

const THEME: Pallete = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: "#E50A14",
    colorBgContainer: "#111",
    fontFamily: MAIN_FONT_FAMILY,
    colorLink: "#fff",
    colorLinkHover: "#E50A14",
    fontSizeHeading1: 52,
    fontSizeHeading1LG: 40,
    colorText: "rgba(255,255,255,0.7)",
    secondFontFamily: SECOND_FONT_FAMILY,
    borderRadius: 0,
    customBorderRadius: "10px",
    screenXS: size.xs,
    screenSM: size.sm,
    screenMD: size.md,
    screenLG: size.lg,
    screenXL: size.xl,
    screenXXL: size.xxl,
  },
  components: {
    Button: {
      fontWeight: "600",
      fontFamily: SECOND_FONT_FAMILY,
    },
    Input: {
      inputFontSizeLG: 16,
    },
    Typography: {
      fontFamily: SECOND_FONT_FAMILY,
      colorTextHeading: "rgba(255,255,255,1)",
      colorTextDescription: "rgba(255,255,255,0.7)",
      fontSize: 16,
    },
    Tag: {
      borderRadius: 10,
    },
    Descriptions: {
      fontSize: 16,
    },
    Spin: {
      colorBgMask: "rgba(0,0,0,1)",
    },
    Skeleton: {
      blockRadius: 10,
      borderRadiusSM: 10,
    },
  },
};

export default THEME;
