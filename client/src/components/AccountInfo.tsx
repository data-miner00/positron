import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { FaEthereum } from "react-icons/fa";
import Button from "./Button";
import { shortenAddress } from "../utils/shortenAddress";
import "./AccountInfo.css";

function AccountInfo() {
  const { currentAccount, connectWallet } = useContext<any>(TransactionContext);

  const ConnectWalletButton = () => (
    <Button onClick={connectWallet} primary label="Connect Metamask" />
  );
  const ConnectedProfile = () => (
    <div className="connected-profile">
      <div>0 ETH</div>
      <div className="ethereum-icon">
        <FaEthereum />
      </div>
      <div>{shortenAddress("0x6b921b92f2ec8ec3adeb38452a5719ac103f3f01")}</div>
      <div className="avatar">
        <img src="/44407884.png" alt="pfp" />
      </div>
    </div>
  );

  return (
    <div className="account-info">
      {!currentAccount ? <ConnectWalletButton /> : <ConnectedProfile />}
    </div>
  );
}

export default AccountInfo;
