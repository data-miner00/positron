import { render, screen } from "@testing-library/react";

import Footer from "./Footer";

describe("Footer", () => {
  it("should render without error", () => {
    render(<Footer />);
    const footerElement = screen.getByRole("footer");
    expect(footerElement).toBeInTheDocument();
  });
});
