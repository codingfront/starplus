import { Button, Carousel, Flex, Typography } from "antd";
import {
  MovieSliderItem,
  MovieSliderContent,
  MovieSliderTitle,
  MovieSliderSubTitle,
  MovieSliderStyle,
  MovieSliderPropertyText,
  AntCarousel,
} from "./movie-slider.style";
import { Link } from "react-router";
import DoubleRightOutlined from "@ant-design/icons/DoubleRightOutlined";
import { FullContainer } from "@/styles/global-styles";
import { replaceInUrl } from "@/utils/navigation";
import ROUTE_PATH from "@/router/paths";
import useSlider from "@/features/movies/hooks/services/use-get-slider";

import FullScreenLoading from "@/components/full-screen-loading";

const { Paragraph } = Typography;

export default function MovieSlider() {
  const { loading, sliderData } = useSlider();
  return (
    <>
      <FullScreenLoading spinning={loading} />
      <MovieSliderStyle>
        <AntCarousel>
          <Carousel autoplay fade arrows dots={false} aria-live="polite">
            {sliderData.map(
              ({
                title,
                images = [],
                id,
                year,
                runtime,
                actors,
                director,
                plot,
                country,
              }) => (
                <MovieSliderItem $posterAddress={images[0]} key={id}>
                  <FullContainer>
                    <MovieSliderContent>
                      <MovieSliderSubTitle
                        level={5}
                      >{`Director: ${director}`}</MovieSliderSubTitle>
                      <Flex vertical gap={20}>
                        <MovieSliderTitle level={1}>{title}</MovieSliderTitle>
                        <Flex gap="middle" wrap="wrap">
                          <MovieSliderPropertyText>{year}</MovieSliderPropertyText>
                          <MovieSliderPropertyText>/</MovieSliderPropertyText>
                          <MovieSliderPropertyText>{runtime}</MovieSliderPropertyText>
                          <MovieSliderPropertyText>/</MovieSliderPropertyText>
                          <MovieSliderPropertyText>{country}</MovieSliderPropertyText>
                        </Flex>
                        <Paragraph>{plot}</Paragraph>
                        <Link to={replaceInUrl(ROUTE_PATH.movie, id)}>
                          <Button
                            iconPosition="end"
                            icon={<DoubleRightOutlined />}
                            type="primary"
                            size="large"
                          >
                            More Info
                          </Button>
                        </Link>
                        <Paragraph>{`Actors: ${actors}`}</Paragraph>
                      </Flex>
                    </MovieSliderContent>
                  </FullContainer>
                </MovieSliderItem>
              ),
            )}
          </Carousel>
        </AntCarousel>
      </MovieSliderStyle>
    </>
  );
}
