import { render, screen } from "@testing-library/react";

import Input from "./Input";

describe("Input", () => {
  it("should render without error", () => {
    const placeholderValue = "Placeholder";

    render(
      <Input
        placeholder={placeholderValue}
        type="text"
        name="sample"
        handleChange={() => {}}
      />
    );

    const inputElement = screen.getByPlaceholderText(placeholderValue);

    expect(inputElement).toBeInTheDocument();
  });
});
