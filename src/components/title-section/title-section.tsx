import { Typography } from "antd";
import { TitleProps } from "antd/es/typography/Title";
import { TitleSectionStyle } from "./title-section.style";
import { PaddingContent } from "@/styles/global-styles";

const { Title } = Typography;

type TitleSection = {
  children: React.ReactNode;
  level?: TitleProps["level"];
  position?: "center" | "start";
};
export default function TitleSection({
  children,
  level = 2,
  position = "center",
}: TitleSection) {
  return (
    <TitleSectionStyle $position={position} className="title-section">
      <PaddingContent>
        <Title className="title-section__text" level={level}>
          {children}
        </Title>
      </PaddingContent>
    </TitleSectionStyle>
  );
}
