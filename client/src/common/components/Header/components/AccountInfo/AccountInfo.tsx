import { useContext } from "react";
import { TransactionContext } from "context/TransactionContext";
import { FaEthereum } from "react-icons/fa";
import Button from "components/Button";
import { shortenAddress } from "utils/shortenAddress";
import "./AccountInfo.css";

function AccountInfo() {
  const { currentAccount, connectWallet, balance } =
    useContext<any>(TransactionContext);

  const ConnectWalletButton = () => (
    <Button onClick={connectWallet} primary label="Connect Metamask" />
  );
  const ConnectedProfile = () => (
    <div className="connected-profile">
      <div>
        <span className="balance">{balance} ETH</span>
      </div>
      <div className="ethereum-icon">
        <FaEthereum />
      </div>
      <div>{shortenAddress(currentAccount)}</div>
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
