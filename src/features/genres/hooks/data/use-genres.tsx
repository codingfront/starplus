import { useContext } from "react";
import { GenreContext } from "@/features/genres/contexts/genre.context";
export const useGenres = () => {
  return useContext(GenreContext);
};
