import { useEffect, useState } from "react";
import { Transaction } from "setup/app-context-manager/models";
import { getAllTransactionsAsync } from "setup/app-context-manager/utils";
import { formatTimeDiff } from "../../utils";
import TransactionCard from "../TransactionCard";

import "./styles.css";

const { ethereum } = window;

function TransactionsContainer() {
  const [transactions, setTransactions] = useState<Array<Transaction>>();

  useEffect(() => {
    getAllTransactionsAsync(ethereum)
      .then((txs) => txs && setTransactions(txs))
      .catch(console.error);
  }, []);

  /* v Temporary codes */
  if (!transactions) {
    return (
      <div className="transactions-container">
        {Array(4).map(() => (
          <TransactionCard
            addressTo="0x4392805C28f47d334856D33d62F8ec539933478D"
            addressFrom="0x4392805C28f47d334856D33d62F8ec539933478D"
            timestamp={formatTimeDiff(new Date(2022, 4, 21))}
            message="hello world"
            keyword="hello"
            amount="0.1"
          />
        ))}
      </div>
    );
  }
  /* ^ Temporary codes */

  return (
    <div className="transactions-container">
      {transactions?.map((tx, index) => (
        <TransactionCard
          key={index}
          addressTo={tx.addressTo}
          addressFrom={tx.addressFrom}
          timestamp={formatTimeDiff(tx.timestamp)}
          message={tx.message}
          keyword={tx.keyword}
          amount={tx.amount}
        />
      ))}
    </div>
  );
}

export default TransactionsContainer;
