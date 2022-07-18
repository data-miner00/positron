import { useContext, useState, useEffect } from "react";
import { FaEthereum } from "react-icons/fa";
import Button from "common/components/Button";
import { shortenAddress } from "utils/shortenAddress";
import "./AccountInfo.css";
import { AppContext } from "setup/app-context-manager/AppContext";
import {
  getAccountBalanceAsync,
  getWalletAccountsAsync,
} from "setup/app-context-manager/utils";

function AccountInfo() {
  const { ethereum } = window;

  const { currentAccount, setCurrentAccount } = useContext(AppContext);

  async function connectWallet() {
    const accounts: Array<string> = await getWalletAccountsAsync(ethereum);

    setCurrentAccount(accounts[0]);
  }

  const [balance, setBalance] = useState<string>("");

  async function updateBalanceAsync() {
    const bal = await getAccountBalanceAsync(ethereum, currentAccount);
    setBalance(bal);
  }

  useEffect(() => {
    updateBalanceAsync();
  }, [currentAccount]);

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
