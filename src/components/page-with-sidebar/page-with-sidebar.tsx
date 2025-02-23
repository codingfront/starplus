import GenreSidebar from "@/features/genres/components/genre-sidebar/genre-sidebar";
import { Container, PaddingContent } from "@/styles/global-styles";
import { Col, Row } from "antd";
import React from "react";

type PageWithSidebarProps = {
  children: React.ReactNode;
};

export default function PageWithSidebar({ children }: PageWithSidebarProps) {
  return (
    <Container>
      <PaddingContent>
        <Row gutter={[24, 24]}>
          <Col
            xs={{ span: 24, order: 2 }}
            sm={{ span: 24, order: 2 }}
            md={{ span: 24, order: 2 }}
            lg={{ span: 7, order: 0 }}
            xl={{ span: 7, order: 0 }}
          >
            <GenreSidebar />
          </Col>
          <Col xs={24} sm={24} md={24} lg={17} xl={17}>
            {children}
          </Col>
        </Row>
      </PaddingContent>
    </Container>
  );
}
