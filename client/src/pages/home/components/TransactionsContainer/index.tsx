import { formatTimeDiff } from "../../utils";
import TransactionCard from "../TransactionCard";

import "./styles.css";

function TransactionsContainer() {
  return (
    <div className="transactions-container">
      {[1, 2, 2, 2].map(() => (
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

export default TransactionsContainer;
