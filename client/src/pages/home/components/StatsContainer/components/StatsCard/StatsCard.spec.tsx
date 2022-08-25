import { render, screen } from "@testing-library/react";

import StatsCard from "./StatsCard";
import { StatsAttributes } from "pages/home/models";

describe("StatsCard", () => {
  it("should render without error", () => {
    const stats: StatsAttributes = {
      figure: "$100k",
      description: "Donation collected as of today",
    };

    render(<StatsCard {...stats} />);
    const figureText = screen.getByText(stats.figure);
    const descriptionText = screen.getByText(stats.description);

    expect(figureText).toBeInTheDocument();
    expect(descriptionText).toBeInTheDocument();
  });
});
