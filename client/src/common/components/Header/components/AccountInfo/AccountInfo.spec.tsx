import React from "react";
import { screen, render } from "@testing-library/react";

import AccountInfo from "./AccountInfo";
import { AppContext } from "setup/app-context-manager/AppContext";

const customRender = (
  ui: React.ReactElement<any, string | React.JSXElementConstructor<any>>,
  value: object,
  renderOptions?: object
) => {
  return render(
    <AppContext.Provider value={value}>{ui}</AppContext.Provider>,
    renderOptions
  );
};

describe("Account Info", () => {
  it("should render button component when no accounts are found", () => {
    const value = {
      currentAccount: "",
      balance: 0,
      connectWalletAsync: () => console.log("Connect wallet called"),
    };
    customRender(<AccountInfo />, value);
    const buttonElement = screen.getByText(/connect metamask/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it("should render account info component when account are found", () => {
    const value = {
      currentAccount: "0x22596EeC7A0399D1fA9Cab32f519AB3051000000",
      balance: 123,
      connectWalletAsync: () => console.log("Connect wallet called"),
    };
    customRender(<AccountInfo />, value);
    const accountInfoElement = screen.getByText(/eth/i);
    expect(accountInfoElement).toBeInTheDocument();
    expect(accountInfoElement).toHaveTextContent("123 ETH");
  });
});
