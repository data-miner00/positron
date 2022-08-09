import Button from "./Button";
import { render, screen } from "@testing-library/react";

describe("Button", () => {
  it("should render the button text provided", () => {
    const testId = "button";
    const textContent = "Testing button";
    render(<Button label={textContent} data-testid={testId} />);
    expect(screen.getByTestId(testId)).toHaveTextContent(textContent);
  });
});
