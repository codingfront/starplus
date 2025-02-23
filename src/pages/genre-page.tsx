import HeroHeader from "@/components/hero-header/hero-header";
import HeroUserProfile from "@/assets/images/hero-user-profile.jpg";
import GenreGridList from "@/features/genres/components/genre-grid-list/genre-grid-list";
import { Container, PaddingContent } from "@/styles/global-styles";
import MetaTags from "@/components/meta-tags";

export default function GenrePage() {
  return (
    <>
      <MetaTags
        title="Movie Genres"
        description="Browse IMDb's top 250 movies by genre. Find the best action, drama, sci-fi, and more on StarPlus!."
      />
      <HeroHeader title="Genres" $backgroundUrl={HeroUserProfile} />
      <Container>
        <PaddingContent>
          <GenreGridList />
        </PaddingContent>
      </Container>
    </>
  );
}
