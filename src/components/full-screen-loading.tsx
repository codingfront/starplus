import { Spin, SpinProps } from "antd";
import Logo from "./logo";
import LoadingOutlined from "@ant-design/icons/LoadingOutlined";

export default function FullScreenLoading({ spinning, ...rest }: SpinProps) {
  return (
    <Spin
      tip={<Logo />}
      fullscreen
      spinning={spinning}
      indicator={<LoadingOutlined spin />}
      {...rest}
    />
  );
}
