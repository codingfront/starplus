import useLoading from "@/hooks/use-loading";
import { apiHandler } from "@/utils/api";

import { App } from "antd";
import { useAuth } from "@/features/auth/contexts/auth.context";

import { useEffect } from "react";

export default function useGetUserAccount() {
  const { message } = App.useApp();
  const { loading, setLoadingState } = useLoading();

  const auth = useAuth();

  useEffect(() => {
    apiHandler(
      async () => {
        await auth.fetchUser();
      },
      error => {
        message.error(error?.response?.data.message);
      },
      setLoadingState,
    );
  }, []);

  return { loading };
}
