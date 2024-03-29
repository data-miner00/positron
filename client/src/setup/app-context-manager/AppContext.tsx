import React, { useEffect, useState } from "react";
import { ChildProps } from "./models";
import { getAccountBalanceAsync, getWalletAccountsAsync } from "./utils";

const { ethereum } = window;

export const AppContext = React.createContext<any>(null);

export function AppContextProvider({ children }: ChildProps) {
  const [currentAccount, setCurrentAccount] = useState<string>("");
  const [balance, setBalance] = useState<string>("0.00");

  async function updateBalanceAsync() {
    const bal = await getAccountBalanceAsync(ethereum, currentAccount);
    setBalance(bal);
  }

  async function connectWalletAsync() {
    const accounts: Array<string> = await getWalletAccountsAsync(ethereum);
    setCurrentAccount(accounts[0]);
  }

  // Metamask not connected: err.code === 4001
  useEffect(() => {
    getWalletAccountsAsync(ethereum)
      .then((accounts) => setCurrentAccount(accounts[0]))
      .catch(() => console.log("No account is connected."));
  }, []);

  useEffect(() => {
    updateBalanceAsync();
  }, [currentAccount]);

  return (
    <AppContext.Provider
      value={{
        currentAccount,
        setCurrentAccount,
        balance,
        updateBalanceAsync,
        connectWalletAsync,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
