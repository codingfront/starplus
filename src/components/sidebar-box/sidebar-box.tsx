import { SidebarBoxStyle } from "./sidebar-box.style";
import { ReactNode } from "react";
import { Typography } from "antd";

const { Title } = Typography;

type SidebarBoxProps = {
  children: ReactNode;
  title: string;
};

export default function SidebarBox({ children, title }: SidebarBoxProps) {
  return (
    <>
      <SidebarBoxStyle className="sidebar">
        <Title className="sidebar__title" level={4}>
          {title}
        </Title>
        <div className="sidebar__content">{children}</div>
      </SidebarBoxStyle>
    </>
  );
}
