import { useContext } from "react";
import { FaEthereum } from "react-icons/fa";
import Button from "common/components/Button";
import { shortenAddress } from "utils/shortenAddress";
import "./AccountInfo.css";
import { AppContext } from "setup/app-context-manager/AppContext";

function AccountInfo() {
  const { currentAccount, connectWalletAsync, balance } =
    useContext(AppContext);

  const ConnectWalletButton = () => (
    <Button onClick={connectWalletAsync} primary label="Connect Metamask" />
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
