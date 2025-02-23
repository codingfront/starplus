import { useParams } from "react-router";
import PageWithSidebar from "@/components/page-with-sidebar/page-with-sidebar";
import MovieByGenreList from "@/features/movies/components/movie-by-genre-list/movie-by-genre-list";
import HeroHeader from "@/components/hero-header/hero-header";
import MetaTags from "@/components/meta-tags";

type MoviesByGenreParam = {
  genreName: string;
};

export default function MoviesByGenrePage() {
  const { genreName = "" } = useParams<MoviesByGenreParam>();

  return (
    <>
      <MetaTags
        title={`${genreName} Movies`}
        description={`Explore the best {${genreName} movies from IMDb's Top 250 list. Discover top-rated films in ${genreName} on StarPlus!.`}
      />
      <HeroHeader
        title={`${genreName} Movies`}
        $backgroundUrl={`/images/genres/${genreName.toLowerCase()}.webp`}
      />
      <PageWithSidebar>
        <MovieByGenreList genreName={genreName} />
      </PageWithSidebar>
    </>
  );
}
