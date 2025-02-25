import { useState } from "react";
import { App, FormInstance } from "antd";
import type { UploadFile } from "antd/es/upload/interface";
import { useNavigate } from "react-router";
import dayjs from "dayjs";
import { api, apiHandler } from "@/utils/api";
import useLoading from "@/hooks/use-loading";
import { replaceInUrl } from "@/utils/navigation";
import ROUTE_PATH from "@/router/paths";
import type { MovieFormSubmitValuesType } from "@/types/movies";

const excludeFields = [
  "poster",
  "user_cover",
  "rottentomatoes",
  "metacritic",
  "year",
  "dvd",
  "released",
];

const appendToFormData = <T>(formData: FormData, key: string, value: T) => {
  if (Array.isArray(value)) formData.append(key, value.join(", "));
  else if (typeof value === "number" || typeof value === "string")
    formData.append(key, value.toString());
  else if (dayjs.isDayjs(value)) formData.append(key, value.format());
};

const appendFile = (formData: FormData, key: string, fileList: UploadFile[]) => {
  if (fileList[0]?.originFileObj) formData.append(key, fileList[0].originFileObj);
};

const appendRatings = (values: MovieFormSubmitValuesType, formData: FormData) =>
  formData.append(
    "ratings",
    JSON.stringify([
      { Value: `${values.imdb_rating}/10`, Source: "Internet Movie Database" },
      { Value: `${values.rottentomatoes}%`, Source: "Rotten Tomatoes" },
      { Value: `${values.metacritic}/100`, Source: "Metacritic" },
    ]),
  );

export default function usePostMovie(form: FormInstance) {
  const { loading, setLoadingState } = useLoading(false);
  const { message } = App.useApp();
  const navigate = useNavigate();
  const [posterFileList, setPosterFileList] = useState<UploadFile[]>([]);
  const [coverFileList, setCoverFileList] = useState<UploadFile[]>([]);

  const handleFileChange =
    (setFileList: React.Dispatch<React.SetStateAction<UploadFile[]>>) =>
    ({ fileList }: { fileList: UploadFile[] }) =>
      setFileList(fileList.slice(-1));

  const execute = async (values: MovieFormSubmitValuesType) => {
    const formData = new FormData();

    ["year", "dvd", "released"].forEach(key => {
      const value = values[key as keyof MovieFormSubmitValuesType];
      if (
        value &&
        (typeof value === "string" ||
          dayjs.isDayjs(value) ||
          value instanceof Date ||
          typeof value === "number")
      ) {
        formData.append(
          key,
          dayjs(value).format(key === "year" ? "YYYY" : "DD MMM YYYY"),
        );
      }
    });

    Object.entries(values)
      .filter(([key]) => !excludeFields.includes(key))
      .forEach(
        ([key, value]) => value !== undefined && appendToFormData(formData, key, value),
      );

    appendRatings(values, formData);
    appendFile(formData, "poster", posterFileList);
    appendFile(formData, "user_cover", coverFileList);
    await apiHandler(
      async () => {
        const { data } = await api.post("movies/multi", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        form.resetFields();
        message.success("✅ New movie created successfully.");
        navigate(replaceInUrl(ROUTE_PATH.movie, data.id));
      },
      error => console.error(error),
      setLoadingState,
    );
  };

  return {
    execute,
    posterFileList,
    handlePosterChange: handleFileChange(setPosterFileList),
    coverFileList,
    handleCoverChange: handleFileChange(setCoverFileList),
    loading,
  };
}
