import useLoading from "@/hooks/use-loading";
import { api, apiHandler } from "@/utils/api";
import { useEffect, useState } from "react";
import { MovieType } from "@/types/movies";

export default function useGetRelatedMovies(movieId: string) {
  const { loading, setLoadingState } = useLoading();
  const [apiResponse, setApiResponse] = useState<MovieType[]>([]);

  useEffect(() => {
    if (movieId) {
      apiCall(movieId);
    }
  }, [movieId]);
  const apiCall = (movieId: string) => {
    apiHandler(
      async () => {
        const response = await api.get(`movies/related/${movieId}`);
        setApiResponse(response.data);
      },
      error => {
        console.error(error);
      },
      setLoadingState,
    );
  };

  return { loading, apiResponse };
}
