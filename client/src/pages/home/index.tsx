import { motion } from "framer-motion";

import Button from "common/components/Button";
import TransferForm from "./components/TransferForm";

import TransactionsContainer from "./components/TransactionsContainer";

import "./styles.css";

import InspiredContainer from "./components/InspiredContainer/InspiredContainer";
import StatsContainer from "./components/StatsContainer";
import { inspirings, stats } from "./constants";

function HomePage() {
  return (
    <div className="landing-page">
      <section className="landing">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="introduction"
        >
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
            onClick={console.log}
          />
        </motion.div>

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
