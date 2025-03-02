import { useNavigate } from "react-router";
import useLoading from "@/hooks/use-loading";
import { apiHandler } from "@/utils/api";
import { LoginDataTypes } from "@/types/auth";
import { App } from "antd";
import { useAuth } from "@/features/auth/contexts/auth.context";
import ROUTE_PATH from "@/router/paths";

export default function useRequestLogin() {
  const { message } = App.useApp();
  const navigate = useNavigate();
  const { loading, setLoadingState } = useLoading(false);
  const auth = useAuth();

  const execute = async (formData: LoginDataTypes) => {
    const data = new FormData();
    for (const name of Object.keys(formData) as (keyof LoginDataTypes)[]) {
      data.append(name, formData[name] as string);
    }
    apiHandler(
      async () => {
        await auth.fetchToken(formData);
        await auth.fetchUser();
        message.success("Welcome back!");
        navigate(ROUTE_PATH.home);
      },
      error => {
        message.error(error?.response?.data.message);
      },
      setLoadingState,
    );
  };
  return { loading, execute };
}
