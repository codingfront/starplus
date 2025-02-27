import { useEffect, useRef, useCallback } from "react";
import { size } from "@/styles/breakpoints";

const toggleScrolledHeaderClass = (
  headerElement: HTMLDivElement,
  currentScrollTop: number,
) => {
  const isDesktop = window.innerWidth >= size.lg;
  const shouldAddScrolled = isDesktop ? currentScrollTop > 50 : true;

  headerElement.classList.toggle("header--scrolled", shouldAddScrolled);
};

export function useHeaderBehavior(headerWrapperElement: React.RefObject<HTMLDivElement>) {
  const lastScrollTop = useRef(0);
  const resizeTimeout = useRef<number | null>(null);

  const handleScroll = useCallback(() => {
    const headerElement = headerWrapperElement.current;
    if (!headerElement) return;

    const currentScrollTop = window.scrollY;
    toggleScrolledHeaderClass(headerElement, currentScrollTop);

    const isScrollingUp = currentScrollTop < lastScrollTop.current;
    headerElement.classList.toggle(
      "header--show-search",
      currentScrollTop > 50 && isScrollingUp,
    );

    lastScrollTop.current = currentScrollTop;
  }, [headerWrapperElement]);

  const handleResize = useCallback(() => {
    if (resizeTimeout.current) clearTimeout(resizeTimeout.current);

    resizeTimeout.current = window.setTimeout(() => {
      const headerElement = headerWrapperElement.current;
      if (!headerElement) return;

      toggleScrolledHeaderClass(headerElement, window.scrollY);
      headerElement.classList.toggle("header--responsive", window.innerWidth <= size.xl);
    }, 150);
  }, [headerWrapperElement]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const headerElement = headerWrapperElement.current;
    if (headerElement) {
      headerElement.classList.add("header--show-search");
      toggleScrolledHeaderClass(headerElement, window.scrollY);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (resizeTimeout.current) clearTimeout(resizeTimeout.current);
    };
  }, [handleScroll, handleResize]);

  return null;
}
