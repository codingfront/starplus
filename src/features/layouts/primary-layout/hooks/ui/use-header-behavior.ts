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

const toggleSearchVisibility = (
  headerElement: HTMLDivElement,
  currentScrollTop: number,
  lastScrollTop: number,
) => {
  const isScrollingUp = currentScrollTop < lastScrollTop;
  const isAtTop = currentScrollTop <= 50;

  if (isAtTop || isScrollingUp) {
    headerElement.classList.add("header--show-search");
  } else {
    headerElement.classList.remove("header--show-search");
  }
};

const toggleResponsiveClass = (headerElement: HTMLDivElement) => {
  const shouldBeResponsive = window.innerWidth <= size.xl;
  headerElement.classList.toggle("header--responsive", shouldBeResponsive);
};

export function useHeaderBehavior(headerWrapperElement: React.RefObject<HTMLDivElement>) {
  const lastScrollTop = useRef(0);
  const resizeHandlerRef = useRef<number | null>(null);

  const handleScroll = useCallback(() => {
    const headerElement = headerWrapperElement.current;
    if (!headerElement) return;

    const currentScrollTop = window.scrollY;
    if (Math.abs(lastScrollTop.current - currentScrollTop) < 5) return;

    toggleScrolledHeaderClass(headerElement, currentScrollTop);
    toggleSearchVisibility(headerElement, currentScrollTop, lastScrollTop.current);

    lastScrollTop.current = currentScrollTop;
  }, [headerWrapperElement]);

  const handleResize = useCallback(() => {
    if (resizeHandlerRef.current) {
      cancelAnimationFrame(resizeHandlerRef.current);
    }
    resizeHandlerRef.current = requestAnimationFrame(() => {
      const headerElement = headerWrapperElement.current;
      if (!headerElement) return;

      toggleScrolledHeaderClass(headerElement, window.scrollY);
      toggleSearchVisibility(headerElement, window.scrollY, lastScrollTop.current);
      toggleResponsiveClass(headerElement);
    });
  }, [headerWrapperElement]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const headerElement = headerWrapperElement.current;
    if (headerElement) {
      toggleScrolledHeaderClass(headerElement, window.scrollY);
      toggleSearchVisibility(headerElement, window.scrollY, lastScrollTop.current);
      toggleResponsiveClass(headerElement);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (resizeHandlerRef.current) cancelAnimationFrame(resizeHandlerRef.current);
    };
  }, [handleScroll, handleResize]);

  return null;
}
