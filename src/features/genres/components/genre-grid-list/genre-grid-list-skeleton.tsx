import { Skeleton } from "antd";

export default function GenreGridListSkeleton() {
  return (
    <>
      <Skeleton title={{ width: "100%" }} paragraph={false} active />
    </>
  );
}
