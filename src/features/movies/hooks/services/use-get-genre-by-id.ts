import useLoading from "@/hooks/use-loading";
import { api, apiHandler } from "@/utils/api";
import { useEffect, useState } from "react";
import { MoviesType } from "@/types/movies";
import { useSearchParams, createSearchParams, useNavigate } from "react-router";
import ROUTE_PATH from "@/router/paths";

const initialResponse: MoviesType = {
  data: [],
  metadata: { current_page: "1", per_page: "12", page_count: "1", total_count: "1" },
};

export default function useGetGenreById(genreName: string) {
  const navigate = useNavigate();
  const { loading, setLoadingState } = useLoading();
  const [searchParams, setSearchParams] = useSearchParams();
  const [apiResponse, setApiResponse] = useState<MoviesType>(initialResponse);

  useEffect(() => {
    fetchMovies(searchParams.get("page") ?? "1", true);
  }, [genreName]);

  const fetchMovies = (page: string = "1", isFirstRequest = false) =>
    apiHandler(
      async () => {
        const { data } = await api.get(`genres/${genreName}/movies`, {
          params: { page },
        });
        setApiResponse(data);
        if (!isFirstRequest) setSearchParams(createSearchParams({ page }));
      },
      error => {
        if (error.status === 404) navigate(ROUTE_PATH.notFound);
      },
      setLoadingState,
    );

  return { loading, apiResponse, callApiPerPage: fetchMovies };
}
