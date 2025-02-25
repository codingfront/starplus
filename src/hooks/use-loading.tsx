import { useState } from "react";

const useLoading = (initialValue: boolean = true) => {
  const [loading, setLoading] = useState(initialValue);

  const setLoadingState = (state: boolean) => {
    setLoading(state);
  };

  return { loading, setLoadingState };
};
export default useLoading;
