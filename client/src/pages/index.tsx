import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

const LandingPage = () => {
  //@ts-ignore
  const { connectWallet } = useContext(TransactionContext);

  const handleSubmit = () => {};

  return <button onClick={connectWallet}>Connect Metamask</button>;
};

export default LandingPage;
