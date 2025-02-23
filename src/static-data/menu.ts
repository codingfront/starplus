import ROUTE_PATH from "@/router/paths";

export type MenuType = {
  title: string;
  to: string;
};

export const mainMenu: MenuType[] = [
  {
    title: "Home",
    to: ROUTE_PATH.home,
  },
  {
    title: "Genres",
    to: ROUTE_PATH.genre,
  },
];

export const StarPlusMenu: MenuType[] = [
  {
    title: "Privacy Policy",
    to: ROUTE_PATH.privacyPolicy,
  },
  {
    title: "Terms of Use",
    to: ROUTE_PATH.termsOfUse,
  },
];
