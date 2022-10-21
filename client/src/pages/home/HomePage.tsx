import { useContext, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Button from "common/components/Button";
import TransactionsContainer from "common/components/TransactionsContainer";
import Snackbar from "common/components/Snackbar";
import { TransactionsContext } from "setup/app-context-manager/TransactionsContext";
import TransferForm from "./components/TransferForm";
import InspiredContainer from "./components/InspiredContainer/InspiredContainer";
import StatsContainer from "./components/StatsContainer";
import { inspirings } from "./constants";
import { AppContext } from "setup/app-context-manager/AppContext";
import { StatsAttributes } from "./models";

import "./HomePage.css";

function HomePage() {
  const { transactions, txCount, totalVolume } =
    useContext(TransactionsContext);
  const { connectWalletAsync } = useContext(AppContext);
  const [snackbarMessage, setSnackbarMessage] = useState<string>("");
  const [snackbarType, setSnackbarType] =
    useState<"info" | "success" | "warning" | "error">("info");
  const [showSnackbar, setShowSnackbar] = useState<boolean>();
  const [stats, setStats] = useState<Array<StatsAttributes>>([]);

  const today = new Date();
  const dateElement = today.toUTCString().split(" ");
  const dateString = `${Number(dateElement[1])} ${dateElement[2]} ${
    dateElement[3]
  }`;

  useEffect(() => {
    setStats([
      {
        figure: `${txCount} Txns`,
        description: `Transaction count as of ${dateString}`,
      },
      {
        figure: `${totalVolume} ETH`,
        description: `Total ETH volume as of ${dateString}`,
      },
      {
        figure: "$5k",
        description: `Volume in USD as of ${dateString}`,
      },
    ]);
  }, [txCount, totalVolume]);

  return (
    <div className="landing-page">
      <AnimatePresence>
        {showSnackbar && (
          <Snackbar message={snackbarMessage} type={snackbarType} />
        )}
      </AnimatePresence>
      <section className="landing">
        <motion.div
          initial={{ opacity: 0, y: "10px" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
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
            onClick={connectWalletAsync}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1 }}
        >
          <TransferForm
            onSuccess={() => {
              setSnackbarMessage("Transaction has been completed successfully");
              setSnackbarType("success");
              setShowSnackbar(true);
              setTimeout(() => setShowSnackbar(false), 2000);
            }}
            onFailure={() => {
              setSnackbarMessage(
                "Transaction could not be completed. Try again later"
              );
              setSnackbarType("error");
              setShowSnackbar(true);
              setTimeout(() => setShowSnackbar(false), 2000);
            }}
          />
        </motion.div>
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
        <TransactionsContainer transactions={transactions} limit={6} />
      </section>
    </div>
  );
}

export default HomePage;
