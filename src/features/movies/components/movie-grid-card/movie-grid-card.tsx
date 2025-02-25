import { MovieType } from "@/types/movies";
import { Flex } from "antd";

import { Link } from "react-router";
import { replaceInUrl } from "@/utils/navigation";
import ROUTE_PATH from "@/router/paths";
import {
  MovieGridItemWrapper,
  MovieGridItemContent,
  MovieGridPoster,
  MovieGridHoveredInfo,
  MovieGridIMDBIcon,
  MovieGridTitle,
} from "./movie-grid-card.style";

type MovieGridCardProps = {
  data: MovieType;
};

export default function MovieGridCard({ data }: MovieGridCardProps) {
  const { id = "", poster, title, runtime, genres = [], imdb_rating, year } = data;
  return (
    <MovieGridItemWrapper>
      <Link title={title} replace to={replaceInUrl(ROUTE_PATH.movie, id)}>
        <MovieGridItemContent>
          <MovieGridPoster loading="lazy" src={poster} alt={title} />
          <MovieGridHoveredInfo className="hover-info">
            <Flex vertical gap="small">
              <span>{genres.join(", ")}</span>
              <span>{year}</span>
              <span>{runtime}</span>
              <Flex align="center" gap="small">
                <MovieGridIMDBIcon />
                <span>{imdb_rating}</span>
              </Flex>
            </Flex>
          </MovieGridHoveredInfo>
        </MovieGridItemContent>
        <MovieGridTitle level={4}>{title}</MovieGridTitle>
      </Link>
    </MovieGridItemWrapper>
  );
}
