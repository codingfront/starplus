export interface MetadataType {
  current_page: string;
  per_page: string;
  page_count: string;
  total_count: string;
}
export interface ApiListResponse<T> {
  metadata: MetadataType;
  data: T[];
}
export interface ApiGenreListResponse<T> extends Array<T> {}

export interface ApiMoviesRelatedList<T> extends Array<T> {}
