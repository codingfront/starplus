export function scrollToElement(element: HTMLDivElement | null) {
  const elementTop = element
    ? element.getBoundingClientRect().top + window.scrollY - 200
    : 0;
  window.scroll({
    top: elementTop,
    behavior: "smooth",
  });
}
