import { screen, render } from "@testing-library/react";

import Snackbar from "./Snackbar";

describe("Snackbar", () => {
  const message = "Custom snackbar message";

  it("should render without error", () => {
    const testid = "snackbar";
    const type = "info";
    render(<Snackbar type={type} message={message} data-testid={testid} />);

    const snackbarElement = screen.getByTestId(testid);

    expect(snackbarElement).toBeInTheDocument();
    expect(snackbarElement).toHaveClass(type);
  });

  it("should render the correct text content", () => {
    render(<Snackbar type="info" message={message} />);

    const divElement = screen.getByText(message);

    expect(divElement).toBeInTheDocument();
  });
});
