import { Flex } from "antd";
import { NavLink } from "react-router";
import { Li } from "./main-menu.style";
import { mainMenu } from "@/static-data/menu";

export default function MainMenu() {
  return (
    <Flex component="ul" gap="large" align="center">
      {mainMenu.map(function ({ title, to }, index) {
        return (
          <Li key={index}>
            <NavLink className={({ isActive }) => (isActive ? "active" : "")} to={to}>
              {title}
            </NavLink>
          </Li>
        );
      })}
    </Flex>
  );
}
