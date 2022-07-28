import { Transaction } from "setup/app-context-manager/models";
import { formatTimeDiff } from "../../utils";
import TransactionCard from "../TransactionCard";

import "./styles.css";

type TransactionsContainerProps = {
  transactions: Array<Transaction>;
  limit?: number;
};

function TransactionsContainer({
  transactions,
  limit = 0,
}: TransactionsContainerProps) {
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

  if (limit > 0) {
    return (
      <div className="transactions-container">
        {transactions?.slice(0, limit - 1).map((tx, index) => (
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
