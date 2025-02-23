import { Cover } from "./hero-header.style";
import { Typography } from "antd";

const { Title } = Typography;

type HeroHeaderProps = {
  title: string;
  $backgroundUrl: string;
};
export default function HeroHeader({ title, $backgroundUrl }: HeroHeaderProps) {
  return (
    <Cover $backgroundUrl={$backgroundUrl}>
      <Title className="title">{title}</Title>
    </Cover>
  );
}
