import { render, screen } from "@testing-library/react";
import TitleSection from "@/components/title-section/title-section";

describe("TitleSection Component", () => {
  test("renders the title with default props", () => {
    render(<TitleSection>Default Title</TitleSection>);

    const titleElement = screen.getByText("Default Title");
    expect(titleElement).toBeInTheDocument();
    expect(titleElement.tagName).toBe("H2");
  });

  test("renders with a specific title level", () => {
    render(<TitleSection level={3}>Level 3 Title</TitleSection>);

    const titleElement = screen.getByText("Level 3 Title");
    expect(titleElement).toBeInTheDocument();
    expect(titleElement.tagName).toBe("H3");
  });

  test("applies the correct position style", () => {
    const { container } = render(
      <TitleSection position="center">Positioned Title</TitleSection>,
    );

    const sectionElement = container.querySelector(".title-section")!;
    expect(sectionElement).toHaveStyle("justify-content: center");

    const afterStyle = window.getComputedStyle(sectionElement, ":after");
    expect(afterStyle.display).toBe("flex");
  });

  test("renders the correct text content", () => {
    render(<TitleSection>Test Title Content</TitleSection>);

    const titleElement = screen.getByText("Test Title Content");
    expect(titleElement).toBeInTheDocument();
  });
});
