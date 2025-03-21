import { useState, useRef, useEffect } from "react";
import { api } from "@/utils/api";
import { MovieType } from "@/types/movies";
import { useSearchOptions } from "../ui/use-search-options";
import useDebounce from "@/hooks/use-debounce";
import { sanitizer } from "@/utils/sanitizer";

export default function useGetSearchMovies() {
  const [data, setData] = useState<MovieType[]>([]);
  const abortControllerRef = useRef<AbortController | null>(null);
  const formatOptions = useSearchOptions();
  const debouncedSearch = useDebounce(onSearch, 300);

  async function onSearch(query: string) {
    const sanitizedQuery = sanitizer(query);
    if (!sanitizedQuery) {
      setData([]);
      return;
    }

    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    abortControllerRef.current = new AbortController();

    try {
      const response = await api.get("movies", {
        params: { q: sanitizedQuery },
        signal: abortControllerRef.current.signal,
      });

      setData(response.data.data);
    } catch (e) {
      console.error("Search error:", e);
    }
  }

  useEffect(() => {
    return () => debouncedSearch.cancel();
  }, [debouncedSearch]);

  return { data: formatOptions(data), debouncedSearch };
}
