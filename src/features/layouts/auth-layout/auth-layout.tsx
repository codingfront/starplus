import { Col, Row, Flex } from "antd";
import {
  AuthBackgroundSection,
  AuthPageWrapper,
  AuthContentWrapper,
  AuthLayoutRow,
} from "./styles/auth-layout.style";
import Logo from "@/components/logo";
import { Outlet } from "react-router";
import AuthHeaderBox from "./auth-header-box";

export default function AuthLayout() {
  return (
    <AuthPageWrapper>
      <Row gutter={0}>
        <Col xs={24} sm={24} md={24} lg={12}>
          <AuthContentWrapper>
            <Row justify="center">
              <Col span={16}>
                <Logo />
              </Col>
            </Row>
            <AuthLayoutRow
              justify="center"
              align="middle"
              style={{ height: "calc(100vh -82px)", minHeight: "700px" }}
            >
              <Col span={16}>
                <Flex vertical gap={40}>
                  <AuthHeaderBox />
                  <Outlet />
                </Flex>
              </Col>
            </AuthLayoutRow>
          </AuthContentWrapper>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12}>
          <AuthBackgroundSection />
        </Col>
      </Row>
    </AuthPageWrapper>
  );
}
