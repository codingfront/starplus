import useMovies from "@/features/movies/hooks/services/use-get-movies";
import MovieCard from "../movie-card/movie-card";
import List from "@/components/list";
import { MovieType } from "@/types/movies";
import MovieCardSkeleton from "../movie-card/movie-card-skeleton";

export default function MovieList() {
  const { loading, apiResponse, callApiPerPage } = useMovies();

  const changePage = (page: string) => {
    callApiPerPage(page);
  };

  return (
    <List<MovieType>
      apiResponse={apiResponse}
      loading={loading}
      changePage={changePage}
      ItemComponent={MovieCard}
      SkeletonComponent={MovieCardSkeleton}
      skeletonCount={12}
    />
  );
}
