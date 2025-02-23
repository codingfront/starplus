import { GenreGridListStyle } from "./genre-grid-list.style";
import { Typography } from "antd";
import { Link } from "react-router";
import { useMemo } from "react";
import { shuffleAndSlice } from "@/utils/arrays";
import { useGenres } from "@/features/genres/hooks/data/use-genres";
import { replaceInUrl } from "@/utils/navigation";
import ROUTE_PATH from "@/router/paths";
import List from "@/components/list";
import { GenreType } from "@/types/genres";
import GenreGridListSkeleton from "./genre-grid-list-skeleton";

const { Title } = Typography;
interface GenreItemProps {
  data: GenreType;
}
export default function GenreGridList() {
  const { genres, genreLoading } = useGenres();
  const randomGenres = useMemo(() => shuffleAndSlice(genres, 12), [genres]);
  const GenreItem = ({ data }: GenreItemProps) => {
    const { name = "" } = data;
    return (
      <Link to={replaceInUrl(ROUTE_PATH.moviesByGenre, name)}>
        <img src={`/images/genres/${name.toLowerCase()}.webp`} />
        <Title level={4}>{name}</Title>
      </Link>
    );
  };
  return (
    <GenreGridListStyle>
      <List<GenreType>
        apiResponse={randomGenres}
        loading={genreLoading}
        ItemComponent={GenreItem}
        SkeletonComponent={GenreGridListSkeleton}
        skeletonCount={12}
        className="genre-content"
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 3,
          lg: 3,
          xl: 4,
          xxl: 4,
        }}
      />
    </GenreGridListStyle>
  );
}
