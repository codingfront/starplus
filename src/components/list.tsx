import { scrollToElement } from "@/utils/scroll";
import { ApiGenreListResponse, ApiListResponse, ApiMoviesRelatedList } from "@/types/api";
import { List as AntdList } from "antd";
import { ListGridType } from "antd/es/list";
import { useRef, useMemo } from "react";

interface BaseListProps<T> {
  apiResponse: ApiListResponse<T> | ApiGenreListResponse<T> | ApiMoviesRelatedList<T>;
  loading: boolean;
  changePage?: (page: string) => void;
  ItemComponent: React.FC<{ data: T }>;
  className?: string;
  grid?: ListGridType;
}

interface ListWithSkeleton<T> extends BaseListProps<T> {
  SkeletonComponent: React.FC;
  skeletonCount: number;
}

interface ListWithoutSkeleton<T> extends BaseListProps<T> {
  SkeletonComponent?: never;
  skeletonCount?: never;
}

type ListProps<T> = ListWithSkeleton<T> | ListWithoutSkeleton<T>;

export default function List<T>({
  apiResponse,
  loading,
  changePage,
  ItemComponent,
  className,
  SkeletonComponent,
  skeletonCount = 0,
  grid = { gutter: 16, column: 1 },
}: ListProps<T>) {
  const entityElement = useRef<HTMLDivElement>(null);

  const onChange = (page: string) => {
    changePage?.(page);
    scrollToElement(entityElement.current);
  };

  const isPaginated = <T,>(response: unknown): response is ApiListResponse<T> =>
    !!(response && typeof response === "object" && "data" in response);

  const dataSource: T[] = isPaginated<T>(apiResponse)
    ? apiResponse.data
    : (apiResponse as T[]);

  const skeletonItems = useMemo(
    () =>
      Array.from({ length: skeletonCount }, (_, i) => ({ id: `skeleton-${i}` })) as T[],
    [skeletonCount],
  );

  return (
    <div ref={entityElement} className="entity-list">
      <AntdList
        key={loading ? "loading" : "data"}
        itemLayout="vertical"
        grid={grid}
        pagination={
          isPaginated(apiResponse)
            ? {
                hideOnSinglePage: true,
                total: Number(apiResponse.metadata.total_count),
                current: Number(apiResponse.metadata.current_page),
                pageSize: Number(apiResponse.metadata.per_page),
                onChange: page => onChange(page.toString()),
                showSizeChanger: false,
                align: "center",
              }
            : undefined
        }
        dataSource={loading ? skeletonItems : dataSource}
        rowKey={item => (item as any).id}
        renderItem={item => (
          <AntdList.Item className={className}>
            {loading && SkeletonComponent ? (
              <SkeletonComponent />
            ) : (
              <ItemComponent data={item} />
            )}
          </AntdList.Item>
        )}
      />
    </div>
  );
}
