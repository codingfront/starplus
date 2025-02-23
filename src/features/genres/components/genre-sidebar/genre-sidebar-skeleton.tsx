import { Skeleton, Flex } from "antd";

export default function GenreSidebarSkeleton() {
  return (
    <Flex
      style={{ marginBottom: "20px" }}
      justify="space-between"
      align="center"
      gap="small"
    >
      <Skeleton title={{ width: "100%" }} paragraph={false} active />
      <Skeleton.Avatar active />
    </Flex>
  );
}
