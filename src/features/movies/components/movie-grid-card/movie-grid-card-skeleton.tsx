import { Flex, Skeleton } from "antd";
export default function MovieGridCardSkeleton() {
  return (
    <Flex vertical gap="middle">
      <Skeleton.Image active style={{ width: "100%", height: "400px" }} />
      <Skeleton active paragraph={false} />
    </Flex>
  );
}
