import styled from "styled-components";

export const ReloadPromptContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: ${({ theme }) => theme.antd.token.colorBgContainer};
  color: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  gap: 10px;
  z-index: 100;
`;

export const Message = styled.div`
  font-size: 14px;
`;

export const DateInfo = styled.div`
  font-size: 11px;
  text-align: center;
  opacity: 0.7;
`;
