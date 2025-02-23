import { AxiosError } from "axios";

export type ErrorType = {
  errors?: string;
  message?: string;
};

type MainFn = Promise<void>;
type OnError = (error: AxiosError<ErrorType>) => void;
type SetLoading = (loading: boolean) => void;

export async function apiHandler(
  mainFn: () => MainFn,
  onError?: OnError,
  setLoadingState?: SetLoading,
) {
  setLoadingState?.(true);
  try {
    await mainFn();
  } catch (error) {
    const axiosError = error as AxiosError<ErrorType>;
    onError?.(axiosError);
  } finally {
    setLoadingState?.(false);
  }
}
