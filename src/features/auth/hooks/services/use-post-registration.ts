import { useNavigate } from "react-router";
import useLoading from "@/hooks/use-loading";
import { api, apiHandler } from "@/utils/api";
import { RegisterDataTypes } from "@/types/auth";
import { App } from "antd";
import ROUTE_PATH from "@/router/paths";
export default function useCreateRegistration() {
  const { message } = App.useApp();
  const navigate = useNavigate();
  const { loading, setLoadingState } = useLoading(false);

  const execute = async (formData: RegisterDataTypes) => {
    apiHandler(
      async () => {
        await api.post("register", formData);
        message.success("Registration successful! Now you can login:)");
        navigate(ROUTE_PATH.login);
      },
      error => {
        message.error(error?.response?.data.errors);
      },
      setLoadingState,
    );
  };
  return { loading, execute };
}
