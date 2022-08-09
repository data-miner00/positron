import Button from "./Button";
import { render, screen } from "@testing-library/react";

describe("Button", () => {
  it("should render the button text provided", () => {
    const testId = "button";
    const textContent = "Testing button";

    render(<Button label={textContent} data-testid={testId} />);

    const buttonElement = screen.getByTestId(testId);

    expect(buttonElement).toHaveTextContent(textContent);
  });

  it("should render the correct attributes", () => {
    const testId = "button";
    const textContent = "Testing button";

    render(<Button label={textContent} data-testid={testId} />);

    const buttonElement = screen.getByTestId(testId);

    expect(buttonElement).toHaveClass("button", "normal");
    expect(buttonElement).toHaveAttribute("type", "button");
  });
});
