import { render, screen } from "@testing-library/react";
import { FaAirbnb } from "react-icons/fa";

import ImgButton from "./ImgButton";

describe("ImgButton", () => {
  it("should render without error", () => {
    const testid = "img-btn";

    render(<ImgButton img={<FaAirbnb />} data-testid={testid} />);
    const imgButtonElement = screen.getByTestId(testid);
    expect(imgButtonElement).toContainHTML("svg");
  });
});
