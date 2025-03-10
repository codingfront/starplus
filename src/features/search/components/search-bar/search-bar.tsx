import { AutoComplete, Input } from "antd";
import { StyledAutoCompleteDropDownRender } from "./search-bar-style";
import SearchOutlined from "@ant-design/icons/SearchOutlined";
import useGetSearchMovies from "@/features/search/hooks/services/use-get-search-movies";
import { useLocation, useNavigate } from "react-router";
import ROUTE_PATH from "@/router/paths";
import { scrollToElement } from "@/utils/scroll";
import { useEffect, useRef } from "react";
import { sanitizer } from "@/utils/sanitizer";

export default function SearchBar(props: any) {
  const { data, debouncedSearch } = useGetSearchMovies();
  const navigate = useNavigate();
  const location = useLocation();
  // TODO: any is not type safe
  const autoCompleteInput = useRef<any>(null);

  const onInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter" && e.currentTarget.value) {
      const query = e.currentTarget.value.trim();
      const sanitizedQuery = sanitizer(query);
      if (!sanitizedQuery) return;

      navigate(`${ROUTE_PATH.home}?q=${encodeURIComponent(sanitizedQuery)}`, {
        replace: true,
      });
      scrollToElement(document.querySelector(".entity-list"));
      e.currentTarget.blur();
    }
  };
  useEffect(() => {
    autoCompleteInput.current?.blur();
  }, [location.pathname]);
  return (
    <AutoComplete
      ref={autoCompleteInput}
      backfill={true}
      options={data}
      variant="borderless"
      virtual={false}
      dropdownRender={menu => {
        return (
          <StyledAutoCompleteDropDownRender>{menu}</StyledAutoCompleteDropDownRender>
        );
      }}
      onFocus={() => (document.body.style.overflow = "hidden hidden")}
      onBlur={() => (document.body.style.overflow = "hidden auto")}
      onInputKeyDown={onInputKeyDown}
      onSearch={debouncedSearch}
      {...props}
    >
      <Input
        addonBefore={<SearchOutlined />}
        variant="filled"
        size="large"
        placeholder="Enter Your Search Movies"
        className="text-font"
      />
    </AutoComplete>
  );
}
