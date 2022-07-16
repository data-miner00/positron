import { useContext } from "react";

import Button from "../../components/Button";

import { TransactionContext } from "../../context/TransactionContext";
import TransferForm from "../../components/TransferForm";

import TransactionsContainer from "./components/TransactionsContainer";
import { cardano, chainlink, ens, oneinch, ren } from "../../assets";

import "./styles.css";
import { InspiringAttributes, StatsAttributes } from "./models";
import InspiredContainer from "./components/InspiredContainer/InspiredContainer";
import StatsContainer from "./components/StatsContainer";

function HomePage() {
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

  const inspirings: Array<InspiringAttributes> = [
    {
      name: "Cardano",
      image: cardano,
      link: "https://cardano.org/",
    },
    {
      name: "1inch",
      image: oneinch,
      link: "https://1inch.io/",
    },
    {
      name: "ENS",
      image: ens,
      link: "https://ens.domains/",
    },
    {
      name: "Ren",
      image: ren,
      link: "https://renproject.io/",
    },
    {
      name: "Chainlink",
      image: chainlink,
      link: "https://chain.link/",
    },
  ];

  const stats: Array<StatsAttributes> = [
    {
      figure: "4 Txns",
      description: "Transaction count as of 5 July 2022",
    },
    {
      figure: "6 ETH",
      description: "Total ETH volume as of 5 July 2022",
    },
    {
      figure: "$5k",
      description: "Volume in USD as of 5 July 2022",
    },
  ];

  return (
    <div className="landing-page">
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

          <Button
            label="Connect Metamask"
            primary
            size="large"
            onClick={connectWallet}
          />
        </div>

        <TransferForm />
      </section>

      <section className="inspired">
        <h3>
          Inspired By <span>Vibrant</span> Ecosystem
        </h3>
        <InspiredContainer inspirings={inspirings} />
      </section>

      <section className="simplestats">
        <StatsContainer stats={stats} />
      </section>

      <section className="transactions">
        <h3>
          Happening across <span>the</span> world
        </h3>
        <p>
          Take a look at the transactions people made recently via{" "}
          <span>Positron+</span>
        </p>
        <TransactionsContainer />
      </section>
    </div>
  );
}

export default HomePage;
