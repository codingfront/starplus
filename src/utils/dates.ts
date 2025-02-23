import dayjs from "dayjs";

export function timeFormatter(time: string | undefined, format: string = "DD/MM/YYYY") {
  return dayjs(time).format(format);
}
