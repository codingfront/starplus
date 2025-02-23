import MovieCard from "@/features/movies/components/movie-card/movie-card";
import List from "@/components/list";
import useGetGenreById from "@/features/movies/hooks/services/use-get-genre-by-id";
import { MovieType } from "@/types/movies";
import MovieCardSkeleton from "../movie-card/movie-card-skeleton";

type MovieByGenreListProps = {
  genreName: string;
};

export default function MovieByGenreList({ genreName }: MovieByGenreListProps) {
  const { loading, apiResponse, callApiPerPage } = useGetGenreById(genreName);

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
      skeletonCount={6}
    />
  );
}
