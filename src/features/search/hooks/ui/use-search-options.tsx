import { useCallback } from "react";
import { MovieType } from "@/types/movies";
import { Flex } from "antd";
import { Link } from "react-router";
import StarFilled from "@ant-design/icons/StarFilled";
import { replaceInUrl } from "@/utils/navigation";
import ROUTE_PATH from "@/router/paths";

export function useSearchOptions() {
  return useCallback((movies: MovieType[]) => {
    return movies.map(({ id, title, poster, year, imdb_rating }) => ({
      label: (
        <Link to={replaceInUrl(ROUTE_PATH.movie, id)}>
          <Flex gap="large" align="top">
            <img className="image" src={poster} alt={title} />
            <div>
              <h3 className="title">{title}</h3>
              <Flex gap="small" align="center" justify="start">
                <span className="year">{year}</span>
                <Flex gap={2} align="center" justify="start">
                  <StarFilled />
                  <span className="imdb_rate">{`${imdb_rating}/10`}</span>
                </Flex>
              </Flex>
            </div>
          </Flex>
        </Link>
      ),
      value: title,
    }));
  }, []);
}
