import { api, apiHandler } from "@/utils/api";
import { GenreType } from "@/types/genres";
import { createContext, useState, useEffect } from "react";
import useLoading from "@/hooks/use-loading";
import { App } from "antd";

interface GenreProviderProps {
  genres: GenreType[];
  genreLoading: boolean;
}

export const GenreContext = createContext<GenreProviderProps>({
  genres: [],
  genreLoading: false,
});
const GenreProvider = ({ children }: { children: React.ReactNode }) => {
  const { loading, setLoadingState } = useLoading();
  const { message } = App.useApp();
  const [genres, setGenres] = useState<GenreType[]>([]);

  useEffect(() => {
    getGenres();
  }, []);

  const getGenres = async () => {
    apiHandler(
      async () => {
        const { data } = await api.get("genres");
        setGenres(data);
      },
      error => {
        message.error(error?.response?.data.message);
      },
      setLoadingState,
    );
  };

  return (
    <GenreContext.Provider value={{ genres, genreLoading: loading }}>
      {children}
    </GenreContext.Provider>
  );
};

export default GenreProvider;
