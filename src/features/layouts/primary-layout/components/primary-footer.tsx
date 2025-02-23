import Logo from "@/components/logo";
import { Container } from "@/styles/global-styles";
import { Row, Col, Flex, Typography, Button } from "antd";
import {
  PrimaryFooterContainer,
  ContactSection,
  ContactLabel,
  ContactInfo,
  SocialLink,
  SectionTitle,
  NavMenuLink,
  CopyrightSection,
  CopyrightBrandText,
  CopyrightLogoText,
} from "../styles/primary-footer.style";
import { useCallback } from "react";
import { mainMenu, MenuType, StarPlusMenu } from "@/static-data/menu";
import CloudDownloadOutlined from "@ant-design/icons/CloudDownloadOutlined";
import GithubFilled from "@ant-design/icons/GithubFilled";
import InstagramFilled from "@ant-design/icons/InstagramFilled";
import LinkedinFilled from "@ant-design/icons/LinkedinFilled";
import TwitterSquareFilled from "@ant-design/icons/TwitterSquareFilled";

const { Paragraph } = Typography;

type SocialType = {
  link: string;
  Icon: JSX.Element;
};

const socialLinks: SocialType[] = [
  { link: "https://x.com/codingfront.dev", Icon: <TwitterSquareFilled /> },
  { link: "https://linkedin.com/codingfront", Icon: <LinkedinFilled /> },
  { link: "https://instagram.com/codingfront", Icon: <InstagramFilled /> },
  { link: "https://github.com/codingfront", Icon: <GithubFilled /> },
];

export default function PrimaryFooter() {
  const renderList = useCallback(
    <T extends { title: string; to: string } | SocialType>(
      items: T[],
      renderItem: (item: T, index: number) => JSX.Element,
    ) => {
      return items.map(renderItem);
    },
    [],
  );

  const renderSocial = (item: SocialType, index: number) => (
    <li key={index}>
      <SocialLink target="_blank" href={item.link}>
        {item.Icon}
      </SocialLink>
    </li>
  );

  const renderMenu = (item: MenuType, index: number) => (
    <li key={index}>
      <NavMenuLink to={item.to}>{item.title}</NavMenuLink>
    </li>
  );
  return (
    <PrimaryFooterContainer>
      <Container>
        <Row justify="space-between" gutter={[16, 48]} align="middle">
          <Col xs={24} sm={24} md={12} lg={6} xl={6}>
            <ContactSection>
              <Flex vertical gap="middle">
                <Logo />
                <Paragraph>
                  <ContactLabel strong>mail:</ContactLabel>
                  <ContactInfo>info@codingfront.dev</ContactInfo>
                </Paragraph>
                <Flex gap="middle" component="ul">
                  {renderList(socialLinks, renderSocial)}
                </Flex>
              </Flex>
            </ContactSection>
          </Col>
          <Col xs={24} sm={12} md={12} lg={6} xl={6}>
            <SectionTitle level={3}>Quick Link </SectionTitle>
            <Flex component="ul" vertical>
              {renderList(mainMenu, renderMenu)}
            </Flex>
          </Col>
          <Col xs={24} sm={12} md={12} lg={6} xl={6}>
            <SectionTitle level={3}>StarPlus</SectionTitle>
            <Flex component="ul" vertical>
              {renderList(StarPlusMenu, renderMenu)}
            </Flex>
          </Col>
          <Col xs={24} sm={24} md={12} lg={6} xl={6}>
            <a href="https://moviesapi.codingfront.dev/" target="_blank">
              <Button
                type="dashed"
                shape="round"
                size="large"
                icon={<CloudDownloadOutlined />}
              >
                API Documentation
              </Button>
            </a>
          </Col>
        </Row>
      </Container>
      <CopyrightSection>
        <Paragraph>
          © 2024
          <CopyrightBrandText className="logo-color" strong>
            Star
          </CopyrightBrandText>
          <CopyrightLogoText className="logo-color" strong>
            plus
          </CopyrightLogoText>
          - All content and media are free.
        </Paragraph>
      </CopyrightSection>
    </PrimaryFooterContainer>
  );
}
