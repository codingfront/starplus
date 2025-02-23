import styled, { createGlobalStyle } from "styled-components";
import { device, size } from "./breakpoints";
import fontsCss from "./fonts.module.css";
import { MAIN_FONT_FAMILY, SECOND_FONT_FAMILY } from "./theme";

export const GlobalStyles = createGlobalStyle`
 ${fontsCss};
#nprogress {
  pointer-events: none;
}
#nprogress .bar {
  background: ${({ theme }) => theme.antd.token.colorPrimary};
  position: fixed;
  z-index: 1031;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
}
#nprogress .peg {
  display: block;
  position: absolute;
  right: 0px;
  width: 100px;
  height: 100%;
  box-shadow: 0 0 10px ${({ theme }) => theme.antd.token.colorPrimary}, 0 0 5px ${({
  theme,
}) => theme.antd.token.colorPrimary};
  opacity: 1.0;
  -webkit-transform: rotate(3deg) translate(0px, -4px);
      -ms-transform: rotate(3deg) translate(0px, -4px);
          transform: rotate(3deg) translate(0px, -4px);
}
#nprogress .spinner {
  display: block;
  position: fixed;
  z-index: 1031;
  top: 15px;
  right: 15px;
}
#nprogress .spinner-icon {
  width: 18px;
  height: 18px;
  box-sizing: border-box;
  border: solid 2px transparent;
  border-top-color: ${({ theme }) => theme.antd.token.colorPrimary};
  border-left-color: ${({ theme }) => theme.antd.token.colorPrimary};
  border-radius: 50%;
  -webkit-animation: nprogress-spinner 400ms linear infinite;
          animation: nprogress-spinner 400ms linear infinite;
}
.nprogress-custom-parent {
  overflow: hidden;
  position: relative;
}

.nprogress-custom-parent #nprogress .spinner,
.nprogress-custom-parent #nprogress .bar {
  position: absolute;
}

@-webkit-keyframes nprogress-spinner {
  0%   { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}
@keyframes nprogress-spinner {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-size: 100%;
}
body, html { overflow-x:hidden; }

body {
  margin: 0;
  padding: 0;
  overflow: hidden auto;
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  font-size: 1rem;
  line-height: 1;
  background: ${({ theme }) => theme.antd.token.colorBgBase};
  color: ${({ theme }) => theme.antd.token.colorText}
}
a.active {
  color: ${({ theme }) => theme.antd.token.colorPrimary}
}
h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
figure,
blockquote,
dl,
dd {
  padding: 0;
  margin: 0;
}
button {
  border: none;
  background-color: transparent;
  font-family: inherit;
  padding: 0;
  cursor: pointer;
}
ul[role="list"],
ol[role="list"] {
  list-style: none;
}
li {
  list-style-type: none;
}
html:focus-within {
  scroll-behavior: smooth;
}
a:not([class]) {
  text-decoration-skip-ink: auto;
}

img,
picture {
  max-width: 100%;
  display: block;
}

input,
button,
textarea,
select {
  font: inherit;
}
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
.h1, h2, h3, h4, h5, h6 {
  font-family: ${SECOND_FONT_FAMILY};
}
p, span.ant-typography, div.ant-typography {
  font-family: ${MAIN_FONT_FAMILY};
}


html body input.ant-input:-webkit-autofill,
html body input.ant-input:-webkit-autofill:hover, 
html body input.ant-input:-webkit-autofill:focus, 
html body input.ant-input:-webkit-autofill:active {
  background: transparent !important;
  color: #fff !important;
  -webkit-text-fill-color: #fff !important;
  box-shadow: 0 0 0px 1000px ${({ theme }) =>
    theme.antd.token.colorBgContainer} inset !important;
}

.ant-btn-icon {
  margin-top: 2px;
}
.ant-select-single {
  height: auto;
}
h1.ant-typography {
    @media ${device.md} {
      font-size: ${({ theme }) => theme.antd.token.fontSizeHeading1LG}px !important;
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: ${size.xl}px;
  margin: 0 auto;
  padding: 0 15px;
`;
export const FullContainer = styled.div`
  width: 100%;
  padding: 0 43px;
  @media ${device.lg} {
    padding: 0 15px;
  }
`;
export const PaddingContent = styled.div`
  padding: 30px 0;
`;
export const PaddingBigContent = styled.div`
  padding: 100px 0;
`;
export const FullPageContent = styled.div`
  height: 80vh;
  min-height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TextContainer = styled.div`
  max-width: 620px;
`;
export const BackgroundBox = styled.div`
  background: ${({ theme }) => theme.antd.token.colorBgContainer};
  padding: 15px;
  border-radius: 15px;
`;
