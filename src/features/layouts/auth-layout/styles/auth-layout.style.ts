import { Row } from "antd";
import styled from "styled-components";

const height = "100vh";
const minHeight = "700px";

export const AuthPageWrapper = styled.div`
  height: ${height};
  min-height: ${minHeight};
`;

export const AuthContentWrapper = styled.div`
  height: 100vh;
  min-height: 500px;
  padding: 40px 0;
`;

export const AuthLayoutRow = styled(Row)`
  height: calc(100vh - 82px);
  min-height: ${minHeight};
`;

export const AuthBackgroundSection = styled.div`
  background-image: url("./signup-bg.jpg");
  background-size: cover;
  background-position: center;
  height: ${height};
  min-height: ${minHeight};
  position: relative;

  &:after {
    position: absolute;
    content: "";
    background: linear-gradient(
      180deg,
      rgba(17, 17, 17, 0.5) 0%,
      rgba(17, 17, 17, 1) 80%
    );
    width: 100%;
    height: 100%;
    inset: 0;
  }
`;
