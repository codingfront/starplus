import GenreGridList from "@/features/genres/components/genre-grid-list/genre-grid-list";
import MovieList from "@/features/movies/components/movie-list/movie-list";
import MovieSlider from "@/features/movies/components/movie-slider/movie-slider";
import { Container } from "@/styles/global-styles";
import PageWithSidebar from "@/components/page-with-sidebar/page-with-sidebar";

import MetaTags from "@/components/meta-tags";

export default function HomePage() {
  return (
    <>
      <MetaTags
        title="StarPlus!"
        description="Explore the top 250 movies of IMDb with StarPlus! A project designed for Coding Front students to learn and practice web development."
      />
      <MovieSlider />
      <Container>
        <GenreGridList />
      </Container>
      <PageWithSidebar>
        <MovieList />
      </PageWithSidebar>
    </>
  );
}
