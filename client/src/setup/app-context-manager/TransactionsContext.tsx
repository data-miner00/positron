import React, { useEffect, useState } from "react";
import { ChildProps, Transaction } from "./models";
import {
  getAllTransactionsAsync,
  getTotalTransactionCount,
  getTotalVolume,
} from "./utils";

export const TransactionsContext = React.createContext<any>(null);

export function TransactionsContextProvider({ children }: ChildProps) {
  const [transactions, setTransactions] = useState<Array<Transaction>>([]);
  const [txCount, setTxCount] = useState<number>(0);
  const [totalVolume, setTotalVolume] = useState<string>("0");

  useEffect(() => {
    getAllTransactionsAsync()
      .then((txs) => txs && setTransactions(txs))
      .catch(console.error);

    getTotalTransactionCount()
      .then((count) => count && setTxCount(count))
      .catch(console.error);

    getTotalVolume()
      .then((volume) => volume && setTotalVolume(volume))
      .catch(console.error);
  }, []);

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        setTransactions,
        txCount,
        setTxCount,
        totalVolume,
        setTotalVolume,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
