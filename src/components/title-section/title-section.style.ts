import { device } from "@/styles/breakpoints";
import styled from "styled-components";

type TitleSectionStyleProps = {
  $position: "center" | "start";
};

export const TitleSectionStyle = styled.div<TitleSectionStyleProps>`
  &.title-section {
    color: white;

    position: relative;
    display: flex;
    align-items: center;
    justify-content: ${props => props.$position};

    &:before {
      content: "";
      flex-grow: 1;
      height: 2px;
      background-color: red;
      margin: 0 15px;
      max-width: 90px;
      width: 100%;
      @media ${device.sm} {
        display: none;
      }
    }
    &:after {
      display: ${props => (props.$position === "center" ? "flex" : "none")};
      content: "";
      flex-grow: 1;
      height: 2px;
      background-color: red;
      margin: 0 15px;
      max-width: 90px;
      width: 100%;
      @media ${device.sm} {
        display: none;
      }
    }
    .title-section__text {
      margin: 0;
      text-transform: capitalize;
      font-size: 32px;
      font-weight: bold;
      text-transform: uppercase;
      @media ${device.sm} {
        font-size: 26px;
      }
    }
  }
`;
