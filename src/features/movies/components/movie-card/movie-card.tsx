import { MovieType } from "@/types/movies";
import {
  MovieCardWrapper,
  MoviePoster,
  ImdbRatingSection,
  ImdbRating,
  ImdbRatingIcon,
  RatingDivider,
  MovieInformation,
} from "./movie-card.style";
import { Typography, Flex, Row, Col, Button } from "antd";
import ActorsIcon from "@/assets/icons/actors.svg";
import DirectorIcon from "@/assets/icons/director.svg";
import { Link } from "react-router";
import CameraOutlined from "@ant-design/icons/CameraOutlined";
import ClockCircleOutlined from "@ant-design/icons/ClockCircleOutlined";
import DoubleRightOutlined from "@ant-design/icons/DoubleRightOutlined";
import FolderOpenOutlined from "@ant-design/icons/FolderOpenOutlined";
import { replaceInUrl } from "@/utils/navigation";
import ROUTE_PATH from "@/router/paths";

const { Title, Text, Paragraph } = Typography;

type MovieCardProps = {
  data: MovieType;
};
export default function MovieCard({ data }: MovieCardProps) {
  const {
    id,
    poster,
    title,
    runtime,
    genres,
    director,
    plot,
    actors,
    imdb_id,
    imdb_rating,
  } = data;
  return (
    <MovieCardWrapper className="movie-item">
      <Flex vertical gap={24}>
        <Row gutter={[24, 24]}>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <Flex vertical gap={16}>
              <MoviePoster src={poster} alt={title} loading="lazy"></MoviePoster>
            </Flex>
          </Col>
          <Col xs={24} sm={24} md={16} lg={16} xl={16}>
            <Flex vertical gap={24} align="stretch" justify="space-between">
              <Flex justify="space-between" gap="small">
                <Link to={replaceInUrl(ROUTE_PATH.movie, id)}>
                  <Title level={2}>{title}</Title>
                </Link>
                <ImdbRatingSection>
                  <Flex gap="small" vertical align="center">
                    <span>
                      <ImdbRating>{imdb_rating}</ImdbRating>
                      /10
                    </span>
                    <RatingDivider orientationMargin={0} />
                    <ImdbRatingIcon />
                  </Flex>
                </ImdbRatingSection>
              </Flex>
              <MovieInformation>
                <Flex vertical gap="middle">
                  <Flex gap="small" align="center">
                    <ClockCircleOutlined />
                    <Text>{`Time: ${runtime}`}</Text>
                  </Flex>
                  {genres && (
                    <Flex gap="small" align="center">
                      <FolderOpenOutlined />
                      <Text>{`Genre(s): ${genres.join(",")}`}</Text>
                    </Flex>
                  )}
                  <Flex gap="small" align="center">
                    <DirectorIcon />
                    <Text>{`Director(s): ${director}`}</Text>
                  </Flex>
                  <Flex gap="small" align="center">
                    <ActorsIcon />
                    <Text>{`Actors: ${actors}`}</Text>
                  </Flex>
                </Flex>
              </MovieInformation>
              <Paragraph>{plot}</Paragraph>
            </Flex>
          </Col>
        </Row>
        <Row gutter={16} align="middle">
          <Col xs={12} sm={16} md={8} lg={8} xl={8}>
            <a
              href={`https://www.imdb.com/title/${imdb_id}/mediaviewer`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button block icon={<CameraOutlined />} size="large">
                Photo / Videos
              </Button>
            </a>
          </Col>
          <Col xs={12} sm={8} md={8} lg={16} xl={16}>
            <Flex justify="end">
              <div>
                <Link
                  title={`Read more about ${title} Movie`}
                  to={replaceInUrl(ROUTE_PATH.movie, id.toString())}
                >
                  <Button
                    type="primary"
                    iconPosition="end"
                    icon={<DoubleRightOutlined />}
                  >
                    Read more
                  </Button>
                </Link>
              </div>
            </Flex>
          </Col>
        </Row>
      </Flex>
    </MovieCardWrapper>
  );
}
