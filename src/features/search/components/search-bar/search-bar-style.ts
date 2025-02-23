import styled from "styled-components";

export const StyledAutoCompleteDropDownRender = styled.div`
  .image {
    width: 40px;
    height: auto;
  }
  .title {
    font-weight: 500;
  }
  span {
    color: ${({ theme }) => theme.antd.token.colorBgSolidActive};
    font-size: 13px;
  }
  svg {
    fill: ${({ theme }) => theme.antd.token.colorPrimary};
    font-size: 14px;
  }
`;
