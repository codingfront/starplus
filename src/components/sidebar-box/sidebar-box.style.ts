import styled from "styled-components";

export const SidebarBoxStyle = styled.div`
  .sidebar__title {
    position: relative;
    padding-left: 42px;

    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 36px;
      height: 3px;
      background: ${({ theme }) => theme.antd.token.colorPrimary};
    }
  }
  .sidebar__content {
    background: ${({ theme }) => theme.antd.token.colorBgContainer};
    padding: 20px;
    border-radius: ${({ theme }) => theme.antd.token.customBorderRadius};
  }
`;
