import { FullContainer } from "@/styles/global-styles";
import { Col, Row, Flex, Button } from "antd";
import {
  LogoContainer,
  NavigationContainer,
  PrimaryHeaderContainer,
  SearchBarContainer,
} from "../styles/primary-header.style";
import { Link } from "react-router";
import LoginOutlined from "@ant-design/icons/LoginOutlined";
import UserOutlined from "@ant-design/icons/UserOutlined";
import MainMenu from "./main-menu/main-menu";
import SearchBar from "@/features/search/components/search-bar/search-bar";
import Logo from "@/components/logo";
import ROUTE_PATH from "@/router/paths";
import { useIsLogin } from "@/features/auth/hooks/data/use-auth";
import { useRef } from "react";
import { useHeaderBehavior } from "../hooks/ui/use-header-behavior";

export default function PrimaryHeader() {
  const isLogin = useIsLogin();
  const headerWrapperElement = useRef<HTMLDivElement | null>(null);
  useHeaderBehavior(headerWrapperElement);

  return (
    <PrimaryHeaderContainer ref={headerWrapperElement}>
      <FullContainer>
        <Row align="middle" gutter={[20, 10]} justify="space-between">
          <Col
            xs={{ order: 1 }}
            sm={{ order: 1 }}
            md={{ order: 1 }}
            lg={{ order: 1 }}
            xl={{ order: 1 }}
          >
            <LogoContainer>
              <Logo />
            </LogoContainer>
          </Col>
          <Col
            xs={{ span: 24, order: 5 }}
            sm={{ span: 24, order: 5 }}
            md={{ span: 24, order: 4 }}
            lg={{ span: 24, order: 4 }}
            xl={{ span: 12, order: 2 }}
          >
            <SearchBarContainer>
              <SearchBar />
            </SearchBarContainer>
          </Col>
          <Col
            xs={{ order: 2 }}
            sm={{ order: 2 }}
            md={{ order: 2 }}
            lg={{ order: 3 }}
            xl={{ order: 3 }}
          >
            <NavigationContainer>
              <MainMenu />
            </NavigationContainer>
          </Col>
          <Col
            xs={{ order: 3 }}
            sm={{ order: 3 }}
            md={{ order: 3 }}
            lg={{ order: 3 }}
            xl={{ order: 4 }}
            flex="auto"
          >
            <Flex gap="middle" align="middle" justify="end">
              {isLogin ? (
                <Link to={ROUTE_PATH.userAccount}>
                  <Button
                    type="text"
                    size="large"
                    iconPosition="end"
                    icon={<UserOutlined />}
                  >
                    My Account
                  </Button>
                </Link>
              ) : null}
              {!isLogin ? (
                <Link to={ROUTE_PATH.login}>
                  <Button
                    size="large"
                    icon={<LoginOutlined />}
                    iconPosition="end"
                    type="primary"
                  >
                    Sign In
                  </Button>
                </Link>
              ) : null}
            </Flex>
          </Col>
        </Row>
      </FullContainer>
    </PrimaryHeaderContainer>
  );
}
