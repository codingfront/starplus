import {
  MovieCardWrapper,
  ImdbRatingSection,
  MovieInformation,
} from "./movie-card.style";
import { Flex, Row, Col, Skeleton } from "antd";
export default function MovieCardSkeleton() {
  return (
    <MovieCardWrapper className="movie-item">
      <Flex vertical gap={24}>
        <Row gutter={[24, 24]}>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <Flex vertical gap={16}>
              <Skeleton.Image style={{ width: `100%`, height: "342px" }} active />
            </Flex>
          </Col>
          <Col xs={24} sm={24} md={16} lg={16} xl={16}>
            <Flex vertical gap={24} align="stretch" justify="space-between">
              <Flex align="center" justify="space-between" gap="middle">
                <Skeleton title={{ style: { flex: 1 } }} paragraph={false} active />
                <ImdbRatingSection>
                  <Flex gap="small" vertical align="center">
                    <Skeleton.Avatar active />
                  </Flex>
                </ImdbRatingSection>
              </Flex>
              <MovieInformation>
                <Flex vertical gap="middle">
                  <Flex gap="small" align="center">
                    <Skeleton.Avatar active shape="circle" />
                    <Skeleton.Input active />
                  </Flex>
                  <Flex gap="small" align="center">
                    <Skeleton.Avatar active shape="circle" />
                    <Skeleton.Input active />
                  </Flex>
                  <Flex gap="small" align="center">
                    <Skeleton.Avatar active shape="circle" />
                    <Skeleton.Input active />
                  </Flex>
                  <Flex gap="small" align="center">
                    <Skeleton.Avatar active shape="circle" />
                    <Skeleton.Input active />
                  </Flex>
                </Flex>
              </MovieInformation>
              <Skeleton active title={false} paragraph={{ rows: 3 }} />
            </Flex>
          </Col>
        </Row>
        <Row gutter={16} align="middle">
          <Col xs={12} sm={16} md={8} lg={8} xl={8}>
            <Skeleton.Button active block size="large" />
          </Col>
          <Col xs={12} sm={8} md={8} lg={16} xl={16}>
            <Flex justify="end">
              <div>
                <Skeleton.Button active />
              </div>
            </Flex>
          </Col>
        </Row>
      </Flex>
    </MovieCardWrapper>
  );
}
