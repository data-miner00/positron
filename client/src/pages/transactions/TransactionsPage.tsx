import TransactionsContainer from "common/components/TransactionsContainer";
import { useContext } from "react";
import { TransactionsContext } from "setup/app-context-manager/TransactionsContext";
import "./TransactionsPage.css";

function TransactionsPage() {
  const { transactions } = useContext(TransactionsContext);

  return (
    <div className="transactions-page">
      <section className="intro">
        <h1>Transactions Masterlist</h1>
        <p>Explore the entire transactions that happened on here.</p>
      </section>

      <section className="transactions">
        <TransactionsContainer transactions={transactions} />
      </section>
    </div>
  );
}

export default TransactionsPage;
