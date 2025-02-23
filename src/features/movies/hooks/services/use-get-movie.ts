import useLoading from "@/hooks/use-loading";
import { api, apiHandler } from "@/utils/api";
import { App } from "antd";
import { useEffect, useState } from "react";
import { MovieFullType } from "@/types/movies";
import { useNavigate } from "react-router";
import ROUTE_PATH from "@/router/paths";

const initialData: MovieFullType = {
  id: 0,
  title: "",
  poster: "",
  user_cover: "",
  year: "",
  rated: "",
  released: "",
  runtime: "",
  director: "",
  writer: "",
  actors: "",
  plot: "",
  country: "",
  awards: "",
  metascore: "",
  imdb_rating: "",
  imdb_votes: "",
  imdb_id: "",
  type: "",
  website: "",
  language: "",
  ratings: "",
  dvd: "",
  box_office: "",
  production: "",
  response: "",
  genres: [],
  images: [],
};

export default function useGetMovie(movieId?: string) {
  const { message } = App.useApp();
  const { loading, setLoadingState } = useLoading();
  const navigate = useNavigate();
  const [apiResponse, setApiResponse] = useState<MovieFullType>(initialData);

  useEffect(() => {
    if (movieId) fetchMovie();
  }, [movieId]);

  const fetchMovie = () =>
    apiHandler(
      async () => {
        setApiResponse(initialData);
        const { data } = await api.get(`movies/${movieId}`);
        setApiResponse(data);
      },
      err => {
        message.error(err?.response?.data?.message);
        if (err.status === 404) navigate(ROUTE_PATH.notFound);
      },
      setLoadingState,
    );

  return { loading, apiResponse };
}
