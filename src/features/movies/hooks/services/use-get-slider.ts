import useLoading from "@/hooks/use-loading";
import { MovieType } from "@/types/movies";
import { api, apiHandler } from "@/utils/api";
import { App } from "antd";
import { useEffect, useState } from "react";

export default function useGetSlider() {
  const { loading, setLoadingState } = useLoading();
  const { message } = App.useApp();
  const [sliderData, setSliderData] = useState<MovieType[]>([]);
  useEffect(() => {
    apiHandler(
      async () => {
        const { data } = await api.get("random_movies");
        setSliderData(data);
      },
      error => {
        message.error(error?.response?.data.message);
      },
      setLoadingState,
    );
  }, []);
  return { loading, sliderData };
}
