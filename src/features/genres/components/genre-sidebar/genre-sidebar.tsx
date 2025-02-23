import SidebarBox from "@/components/sidebar-box/sidebar-box";
import { GenreSidebarStyle } from "./genre-sidebar.style";
import { useGenres } from "@/features/genres/hooks/data/use-genres";
import { Flex } from "antd";
import { NavLink } from "react-router";
import RightCircleOutlined from "@ant-design/icons/RightCircleOutlined";
import List from "@/components/list";
import { GenreType } from "@/types/genres";
import ROUTE_PATH from "@/router/paths";
import { replaceInUrl } from "@/utils/navigation";
import GenreSidebarSkeleton from "./genre-sidebar-skeleton";

interface GenreItemProps {
  data: GenreType;
}

export default function GenreSidebar() {
  const { genres, genreLoading } = useGenres();
  const GenreItem = ({ data }: GenreItemProps) => {
    const { name = "", movies_count } = data;
    return (
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "")}
        replace
        to={replaceInUrl(ROUTE_PATH.moviesByGenre, name)}
      >
        <Flex justify="space-between">
          <Flex align="center" gap="small">
            <RightCircleOutlined />
            <p>{name} Movies</p>
          </Flex>
          <span>({movies_count})</span>
        </Flex>
      </NavLink>
    );
  };
  return (
    <GenreSidebarStyle>
      <SidebarBox title="Genres">
        <List<GenreType>
          ItemComponent={GenreItem}
          loading={genreLoading}
          apiResponse={genres}
          className="genre-sidebar-item"
          SkeletonComponent={GenreSidebarSkeleton}
          skeletonCount={20}
        />
      </SidebarBox>
    </GenreSidebarStyle>
  );
}
