import styled from "styled-components";
import { device } from "@/styles/breakpoints";

export const PrimaryHeaderContainer = styled.div`
  background: linear-gradient(
    180deg,
    rgba(17, 17, 17, 0.6362920168067228) 64%,
    rgba(17, 17, 17, 0) 97%
  );
  position: fixed;
  padding: 20px 0;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  transition: all 0.3s ease-in-out;
  @media ${device.xl} {
    padding: 10px 0;
  }

  &.header--scrolled {
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(10px);
  }

  &.header--responsive {
    height: 60px;
    overflow: hidden;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(10px);

    &.header--show-search {
      height: 112px;
      overflow: hidden;
    }
  }
`;

export const LogoContainer = styled.div`
  img {
    width: 173px;
    height: auto;
    display: block;
    @media ${device.xl} {
      width: 110px;
    }
  }
`;

export const NavigationContainer = styled.div`
  @media ${device.sm} {
    display: none;
  }
`;

export const SearchBarContainer = styled.div`
  .ant-select-auto-complete {
    width: 100%;
  }
`;
