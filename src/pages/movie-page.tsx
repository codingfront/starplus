import { Button, Flex, Typography, Tag, Descriptions, Row, Col, Tooltip } from "antd";
import type { DescriptionsProps } from "antd";
import {
  MoviePageWrapper,
  CoverWrapper,
  CoverImage,
  DetailsSection,
  DetailLabel,
  MovieTitle,
  ScoresSection,
  ScoreItem,
  GenresSection,
  GenreItem,
  MoreInfoSection,
  OtherInfoSection,
  OtherInfoImage,
} from "@/styles/pages/movie-page.style";
import { Link, useParams } from "react-router";
import useGetMovie from "@/features/movies/hooks/services/use-get-movie";
import RottenTomatoesIcon from "@/assets/icons/rottentomatoes.svg";
import ImdbMultiColorIcon from "@/assets/icons/imdb-multicolor.svg";
import MetacriticIcon from "@/assets/icons/metacritic.svg";
import { useMemo } from "react";
import {
  convertRuntimeToHours,
  formatNumber,
  formatNumberAbbreviation,
  movieRatedDescriptions,
} from "@/utils/movies";
import { replaceInUrl } from "@/utils/navigation";
import ROUTE_PATH from "@/router/paths";
import { Container, PaddingContent, TextContainer } from "@/styles/global-styles";
import ClockCircleFilled from "@ant-design/icons/ClockCircleFilled";
import DoubleRightOutlined from "@ant-design/icons/DoubleRightOutlined";
import MovieGridList from "@/features/movies/components/movie-grid-list/movie-grid-list";
import TitleSection from "@/components/title-section/title-section";
import MetaTags from "@/components/meta-tags";
import FullScreenLoading from "@/components/full-screen-loading";

const { Paragraph } = Typography;

type MovieRating = {
  Source: string;
  Value: string;
};

export default function MoviePage() {
  const { movieId = "" } = useParams();
  const { loading, apiResponse } = useGetMovie(movieId);

  const {
    title,
    poster,
    images,
    ratings,
    rated,
    director,
    actors,
    runtime,
    year,
    language,
    genres,
    imdb_id,
    plot,
    country,
    released,
    writer,
    awards,
    dvd,
    box_office,
    imdb_votes,
    user_cover,
  } = apiResponse;

  const movieRatings: MovieRating[] = useMemo(() => {
    try {
      return JSON.parse(ratings || "[]");
    } catch {
      return [];
    }
  }, [ratings]);
  const iconMap: Record<string, JSX.Element> = useMemo(
    () => ({
      "Internet Movie Database": <ImdbMultiColorIcon />,
      "Rotten Tomatoes": <RottenTomatoesIcon />,
      Metacritic: <MetacriticIcon />,
    }),
    [],
  );

  const renderRatingsList = useMemo(() => {
    return movieRatings.map(({ Source = "", Value = "" }) => {
      const sourceCamelCase = Source.toLowerCase().replaceAll(" ", "-");
      return (
        <ScoreItem
          {...(sourceCamelCase === "rotten-tomatoes" && { rotten: true })}
          key={Source}
        >
          <Flex gap="small" align="center">
            {iconMap[Source]}
            <span>{Value}</span>
          </Flex>
        </ScoreItem>
      );
    });
  }, [movieRatings, iconMap]);

  const getRatingDescription = useMemo(
    () => <Tooltip title={movieRatedDescriptions[rated]}>{rated}</Tooltip>,
    [rated],
  );

  const renderGenres = useMemo(() => {
    return genres?.map(genre => (
      <GenreItem key={genre}>
        <Link to={replaceInUrl(ROUTE_PATH.moviesByGenre, genre)}>
          <Tag color="default">{genre}</Tag>
        </Link>
      </GenreItem>
    ));
  }, [genres]);

  const otherInfo: DescriptionsProps["items"] = useMemo(
    () => [
      { label: "Country", children: country },
      { label: "Language", children: language },
      { label: "Released Time", children: released },
      {
        label: "IMDB Votes",
        children: (
          <Tooltip title={formatNumber(imdb_votes)}>
            {formatNumberAbbreviation(imdb_votes)}
          </Tooltip>
        ),
      },
      {
        label: (
          <Tooltip title="box office refers to the total revenue a film generates from ticket sales in theaters. It is a key metric used to measure a movie's commercial success.">
            Box Office
          </Tooltip>
        ),
        children: formatNumber(box_office, "USD"),
      },
      {
        label: (
          <Tooltip
            arrow={false}
            title="physical release of a movie on a disc format for home entertainment"
          >
            DVD
          </Tooltip>
        ),
        children: dvd,
      },
      { label: "Award(s)", children: awards },
    ],
    [country, language, released, imdb_votes, box_office, dvd, awards],
  );

  return (
    <>
      <MetaTags
        title={title}
        description={`Discover details about ${title} from the IMDb Top 250 list.`}
      />
      <FullScreenLoading spinning={loading} />
      {!loading ? (
        <MoviePageWrapper>
          <CoverWrapper>
            {images?.[0] && <CoverImage src={images[0]} alt={title} />}
            {user_cover && <CoverImage src={user_cover} alt={title} />}
          </CoverWrapper>
          <Container>
            <TextContainer>
              <DetailsSection>
                <Flex vertical gap="middle">
                  <MovieTitle level={1}>{`${title} ${year}`}</MovieTitle>
                  <ScoresSection>
                    <Flex align="center" gap="middle" component="ul">
                      {renderRatingsList}
                    </Flex>
                  </ScoresSection>
                  <div className="rating">
                    <span>Rated: </span>
                    {getRatingDescription}
                  </div>
                  <div>
                    <DetailLabel>Director: </DetailLabel> {director}
                  </div>
                  <div>
                    <DetailLabel>Writer(s): </DetailLabel> {writer}
                  </div>
                  <div>
                    <DetailLabel>Top cast: </DetailLabel> {actors}
                  </div>
                  <Flex align="center" gap="small">
                    <ClockCircleFilled />
                    <span>{convertRuntimeToHours(runtime)}</span>
                  </Flex>
                </Flex>
                {genres && (
                  <GenresSection>
                    <Flex gap="small" component="ul">
                      {renderGenres}
                    </Flex>
                  </GenresSection>
                )}
                <MoreInfoSection>
                  <a
                    href={`https://www.imdb.com/title/${imdb_id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      iconPosition="end"
                      icon={<DoubleRightOutlined />}
                      size="large"
                      type="primary"
                    >
                      More info
                    </Button>
                  </a>
                </MoreInfoSection>
              </DetailsSection>
            </TextContainer>
            <PaddingContent>
              <TextContainer>
                <TitleSection level={2} position="start">
                  Summary
                </TitleSection>
                <Paragraph>{plot}</Paragraph>
              </TextContainer>
            </PaddingContent>
            <PaddingContent>
              <OtherInfoSection>
                <TitleSection level={2} position="start">
                  Details
                </TitleSection>
                <Row align="middle" justify="center" gutter={[24, 24]}>
                  <Col xs={24} sm={24} md={12} lg={6}>
                    <OtherInfoImage src={poster} alt={title} />
                  </Col>
                  <Col xs={24} sm={24} md={12} lg={18}>
                    <Descriptions column={1} bordered items={otherInfo} />
                  </Col>
                </Row>
              </OtherInfoSection>
            </PaddingContent>
            <PaddingContent>
              <MovieGridList movieId={movieId} />
            </PaddingContent>
          </Container>
        </MoviePageWrapper>
      ) : null}
    </>
  );
}
