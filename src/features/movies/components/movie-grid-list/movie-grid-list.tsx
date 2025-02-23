import useRelatedMovies from "@/features/movies/hooks/services/use-get-related-movies";
import MovieGridCard from "../movie-grid-card/movie-grid-card";
import List from "@/components/list";
import { MovieType } from "@/types/movies";
import MovieGridCardSkeleton from "../movie-grid-card/movie-grid-card-skeleton";
import { Fragment } from "react/jsx-runtime";
import TitleSection from "@/components/title-section/title-section";

type MovieGridListProps = {
  movieId: string;
};

export default function MovieGridList({ movieId }: MovieGridListProps) {
  const { loading, apiResponse } = useRelatedMovies(movieId);
  return (
    <>
      {apiResponse && apiResponse.length > 0 && (
        <Fragment>
          <TitleSection>More like this</TitleSection>
          <List<MovieType>
            apiResponse={apiResponse}
            loading={loading}
            ItemComponent={MovieGridCard}
            SkeletonComponent={MovieGridCardSkeleton}
            skeletonCount={4}
            grid={{
              gutter: 16,
              xs: 1,
              sm: 2,
              md: 2,
              lg: 4,
              xl: 4,
              xxl: 4,
            }}
          />
        </Fragment>
      )}
    </>
  );
}
