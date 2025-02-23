import useLoading from "@/hooks/use-loading";
import { api, apiHandler } from "@/utils/api";
import { App } from "antd";
import { useEffect, useState } from "react";
import { MoviesType } from "@/types/movies";
import { useSearchParams, createSearchParams } from "react-router";

export default function useGetMovies() {
  const { message } = App.useApp();
  const { loading, setLoadingState } = useLoading();
  const [searchParams, setSearchParams] = useSearchParams();
  const [apiResponse, setApiResponse] = useState<MoviesType>({
    data: [],
    metadata: { current_page: "1", per_page: "12", page_count: "1", total_count: "1" },
  });

  const page = searchParams.get("page") ?? "1";
  const q = searchParams.get("q") ?? "";

  const apiCall = async (page: string, q: string, updateParams = true) => {
    await apiHandler(
      async () => {
        const { data } = await api.get("movies", {
          params: { page, ...(q && { q }) },
        });
        setApiResponse(data);
        if (updateParams) setSearchParams(createSearchParams({ page, ...(q && { q }) }));
      },
      err => message.error(err?.response?.data?.message),
      setLoadingState,
    );
  };

  const callApiPerPage = (page: string = "1") => apiCall(page, q);

  useEffect(() => {
    apiCall(page, q, false);
  }, [q]);

  return { loading, apiResponse, callApiPerPage };
}
