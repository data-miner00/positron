import React, { useEffect, useState } from "react";
import { ChildProps, Transaction } from "./models";
import { getAllTransactionsAsync } from "./utils";

const { ethereum } = window;

export const TransactionsContext = React.createContext<any>(null);

export function TransactionsContextProvider({ children }: ChildProps) {
  const [transactions, setTransactions] = useState<Array<Transaction>>([]);

  useEffect(() => {
    getAllTransactionsAsync(ethereum)
      .then((txs) => txs && setTransactions(txs))
      .catch(console.error);
  }, []);

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        setTransactions,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
