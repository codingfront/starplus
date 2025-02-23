import { MetadataType } from "./api";
import type { UploadFile } from "antd/es/upload/interface";
import dayjs from "dayjs";

export interface MovieType {
  id: number;
  title: string;
  poster: string;
  year: string;
  country: string;
  imdb_rating: string;
  website: string;
  runtime: string;
  director: string;
  actors: string;
  plot: string;
  imdb_id: string;
  genres: string[];
  images: string[];
}
export interface MovieFullType {
  id: number;
  title: string;
  poster: string;
  user_cover: string | null;
  year: string;
  rated: string;
  released: string;
  runtime: string;
  director: string;
  writer: string;
  actors: string;
  plot: string;
  country: string;
  awards: string;
  metascore: string;
  imdb_rating: string;
  imdb_votes: string;
  imdb_id: string;
  type: string;
  website: string;
  language: string;
  ratings: string;
  dvd: string;
  box_office: string;
  production: string;
  response: string;
  genres?: string[];
  images?: string[];
}

export interface MoviesType {
  data: MovieType[];
  metadata: MetadataType;
}

export interface MovieFormSubmitValuesType {
  title: string;
  poster: UploadFile[];
  user_cover: UploadFile[];
  genr: string;
  plot: string;
  runtime: string;
  language: string[];
  country: string[];
  director: string[];
  actors: string[];
  awards: string[];
  year: dayjs.Dayjs;
  imdb_rating: number;
  rottentomatoes: number;
  metacritic: number;
  dvd: dayjs.Dayjs;
  box_office: number;
  rated: string;
  released: dayjs.Dayjs;
  writer: string[];
  imdb_votes: number;
}
