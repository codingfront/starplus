import { useEffect, useRef, useCallback } from "react";
import { size } from "@/styles/breakpoints";

const toggleScrolledHeaderClass = (
  headerElement: HTMLDivElement | null,
  currentScrollTop: number,
) => {
  if (!headerElement) return;

  const isDesktop = window.innerWidth >= size.lg;
  const shouldAddScrolled = isDesktop ? currentScrollTop > 50 : true;

  headerElement.classList.toggle("header--scrolled", shouldAddScrolled);
};

export function useHeaderBehavior(headerWrapperElement: React.RefObject<HTMLDivElement>) {
  const lastScrollTop = useRef(0);

  const handleScroll = useCallback(() => {
    const headerElement = headerWrapperElement.current;
    if (!headerElement) return;

    const currentScrollTop = window.scrollY;
    toggleScrolledHeaderClass(headerElement, currentScrollTop);

    const isScrollingUp = currentScrollTop < lastScrollTop.current;
    if (currentScrollTop > 50) {
      headerElement.classList.toggle("header--show-search", isScrollingUp);
    }

    lastScrollTop.current = currentScrollTop;
  }, [headerWrapperElement]);
  const handleResize = useCallback(() => {
    const headerElement = headerWrapperElement.current;
    if (!headerElement) return;

    toggleScrolledHeaderClass(headerElement, window.scrollY);
    headerElement.classList.toggle("header--responsive", window.innerWidth <= size.xl);
  }, [headerWrapperElement]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const headerElement = headerWrapperElement.current;
    if (headerElement) {
      headerElement.classList.add("header--show-search");
      toggleScrolledHeaderClass(headerElement, window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleScroll, handleResize]);
}
