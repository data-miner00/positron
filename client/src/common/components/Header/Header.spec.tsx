import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AppContext } from "setup/app-context-manager/AppContext";

import Header from "./Header";

const customRender = (
  ui: React.ReactElement<any, string | React.JSXElementConstructor<any>>,
  value: object,
  renderOptions?: object
) => {
  return render(
    <MemoryRouter>
      <AppContext.Provider value={value}>{ui}</AppContext.Provider>,
    </MemoryRouter>,
    renderOptions
  );
};

describe("Header", () => {
  it("should render without error", () => {
    const value = {
      currentAccount: "",
      balance: 0,
      connectWalletAsync: () => console.log("Connect wallet called"),
    };
    customRender(<Header />, value);
  });
});
