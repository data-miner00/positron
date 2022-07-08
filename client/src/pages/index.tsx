import { useContext } from "react";
import Button from "../components/Button";
import Header from "../components/Header";
import Input from "../components/Input";
import { TransactionContext } from "../context/TransactionContext";
import TransferForm from "../components/TransferForm";

import "./index.css";
import Transactions from "../components/Transactions";

const LandingPage = () => {
  const {
    connectWallet,
    currentAccount,
    handleChange,
    sendTransaction,
    formData,
    // isLoading,
  } = useContext<any>(TransactionContext);

  const handleSubmit = (event: Event) => {
    const { addressTo, amount, keyword, message } = formData;

    event.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

  return (
    <div className="landing-page">
      <Header />
      <section className="landing">
        <div className="introduction">
          <p className="accented">Now live on testnet!</p>
          <h1 className="heading">
            Make Transactions that <span className="gradient">MATTERS</span>.
          </h1>
          <p className="description">
            Ditch the traditional way of sending cryptos. Send it{" "}
            <u>
              <strong>FUN</strong>
            </u>
            . No more dry and boring transaction like it used to.
          </p>

          <Button label="Connect Metamask" primary size="large" />
        </div>

        <TransferForm />
      </section>
      <section className="inspired">
        <h3>Inspired By</h3>
        <ul>
          <li>
            <img src="/ada.webp" alt="" />
          </li>
          <li>
            <img src="/1inch.png" alt="" />
          </li>
          <li>
            <img src="/matic.png" alt="" />
          </li>
          <li>
            <img src="/ren.png" alt="" />
          </li>
          <li>
            <img src="/link.png" alt="" />
          </li>
        </ul>
      </section>
      <section className="transactions">
        <h3>Recent Transactions</h3>
        <Transactions />
      </section>
    </div>
  );
};

export default LandingPage;
