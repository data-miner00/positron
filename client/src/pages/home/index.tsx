import { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Button from "common/components/Button";
import TransactionsContainer from "common/components/TransactionsContainer";
import Snackbar from "common/components/Snackbar";
import { TransactionsContext } from "setup/app-context-manager/TransactionsContext";

import TransferForm from "./components/TransferForm";
import InspiredContainer from "./components/InspiredContainer/InspiredContainer";
import StatsContainer from "./components/StatsContainer";
import { inspirings, stats } from "./constants";

import "./styles.css";
import { AppContext } from "setup/app-context-manager/AppContext";

function HomePage() {
  const { transactions } = useContext(TransactionsContext);
  const { connectWalletAsync } = useContext(AppContext);
  const [snackbarMessage, setSnackbarMessage] = useState<string>("");
  const [snackbarType, setSnackbarType] =
    useState<"info" | "success" | "warning" | "error">("info");
  const [showSnackbar, setShowSnackbar] = useState<boolean>();

  return (
    <div className="landing-page">
      <AnimatePresence>
        {showSnackbar && (
          <Snackbar message={snackbarMessage} type={snackbarType} />
        )}
      </AnimatePresence>
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
            onClick={connectWalletAsync}
          />
        </motion.div>

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
