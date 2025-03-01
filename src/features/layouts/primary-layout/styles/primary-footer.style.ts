import styled from "styled-components";
import { device } from "@/styles/breakpoints";
import { Typography } from "antd";
import { Link } from "react-router";

const { Text, Title } = Typography;

export const PrimaryFooterContainer = styled.div`
  padding: 80px 0 0;
  background: ${({ theme }) => theme.antd.token.colorBgContainer};
`;

export const ContactSection = styled.div`
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  margin-right: 30px;

  @media ${device.md} {
    border-right: none;
  }
`;

export const ContactLabel = styled(Text)`
  color: ${({ theme }) => theme.antd.token.colorPrimary};
  font-family: ${({ theme }) => theme.antd.token.secondFontFamily};
  text-transform: capitalize;
`;

export const ContactInfo = styled(Text)`
  color: ${({ theme }) => theme.antd.token.colorTextBase};
  font-family: ${({ theme }) => theme.antd.token.secondFontFamily};
`;

export const SocialLink = styled.a`
  font-size: 20px;
`;

export const SectionTitle = styled(Title)`
  margin-bottom: 20px;
`;

export const NavMenuLink = styled(Link)`
  display: block;
  font-size: 16px;
  color: ${({ theme }) => theme.antd.token.colorTextDescription};
  padding-bottom: 16px;
  position: relative;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.antd.token.colorPrimary};
    padding-left: 16px;

    &:after {
      position: absolute;
      left: 0;
      content: "-";
    }
  }
`;

export const CopyrightSection = styled.div`
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 40px 0;
  margin-top: 40px;
`;

export const CopyrightBrandText = styled(Text)`
  padding: 0;
  margin: 0;
  margin-inline-start: 5px;
  color: ${({ theme }) => theme.antd.token.colorTextBase};
  &.ant-typography {
    font-family: ${({ theme }) => theme.antd.token.secondFontFamily};
  }
`;

export const CopyrightLogoText = styled(Text)`
  &.ant-typography {
    font-family: ${({ theme }) => theme.antd.token.secondFontFamily};
  }
  color: ${({ theme }) => theme.antd.token.colorPrimary};
`;
