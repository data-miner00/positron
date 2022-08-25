import { motion } from "framer-motion";

import { Transaction } from "setup/app-context-manager/models";
import { formatTimeDiff } from "pages/home/utils";
import TransactionCard from "./components/TransactionCard";

import "./TransactionsContainer.css";

type TransactionsContainerProps = {
  transactions: Array<Transaction>;
  limit?: number;
};

function TransactionsContainer({
  transactions,
  limit = 0,
}: TransactionsContainerProps) {
  /* v Temporary codes */
  if (transactions.length < 1) {
    return (
      <div className="transactions-container">
        <ul>
          {Array(6)
            .fill(undefined)
            .map((_, index) => (
              <li>
                <TransactionCard
                  key={index}
                  addressTo="0x4392805C28f47d334856D33d62F8ec539933478D"
                  addressFrom="0x4392805C28f47d334856D33d62F8ec539933478D"
                  timestamp={formatTimeDiff(new Date(2022, 4, 21))}
                  message="hello world"
                  keyword="hello"
                  amount="0.1"
                />
              </li>
            ))}
        </ul>
      </div>
    );
  }
  /* ^ Temporary codes */

  if (limit > 0) {
    return (
      <div className="transactions-container">
        <ul>
          {transactions?.slice(0, limit).map((tx, index) => (
            <li>
              <TransactionCard
                key={index}
                addressTo={tx.addressTo}
                addressFrom={tx.addressFrom}
                timestamp={formatTimeDiff(tx.timestamp)}
                message={tx.message}
                keyword={tx.keyword}
                amount={tx.amount}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="transactions-container">
      <ul>
        {transactions?.map((tx, index) => (
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: (index + 1) * 0.2 }}
          >
            <TransactionCard
              key={index}
              addressTo={tx.addressTo}
              addressFrom={tx.addressFrom}
              timestamp={formatTimeDiff(tx.timestamp)}
              message={tx.message}
              keyword={tx.keyword}
              amount={tx.amount}
            />
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionsContainer;
