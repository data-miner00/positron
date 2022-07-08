import "./Transactions.css";
import useGiphy from "../common/hooks/useGiphy";
import { useId } from "react";
import { FaEthereum } from "react-icons/fa";
import { shortenAddress } from "../utils/shortenAddress";

type Tx = {
  addressTo: string;
  addressFrom: string;
  timestamp: string;
  message: string;
  keyword: string;
  amount: string;
};

function Transaction({
  addressTo,
  addressFrom,
  timestamp,
  message,
  keyword,
  amount,
}: Tx) {
  const gifUrl = useGiphy(keyword);
  const id = useId();
  return (
    <div className="transaction">
      {/* <img src={gifUrl} alt="gif" /> */}

      <div className="image"></div>

      <div className="txinfo">
        <div className="sender field">
          <label htmlFor={`sender-${id}`}>Sender</label>
          <span id={`sender-${id}`}>{shortenAddress(addressFrom, 8)}</span>
        </div>
        <div className="receiver field">
          <label htmlFor={`receiver-${id}`}>Receiver</label>
          <span id={`receiver-${id}`}>{shortenAddress(addressTo, 8)}</span>
        </div>
        <div className="amount field">
          <label htmlFor={`amount-${id}`}>Amount</label>
          <span id={`amount-${id}`}>
            <FaEthereum /> {amount}
          </span>
        </div>
        <div className="line-deco" aria-hidden></div>
        <div className="timestamp">2 hrs ago</div>
      </div>
    </div>
  );
}

function Transactions() {
  return (
    <Transaction
      addressTo="0x4392805C28f47d334856D33d62F8ec539933478D"
      addressFrom="0x4392805C28f47d334856D33d62F8ec539933478D"
      timestamp="today"
      message="hello world"
      keyword="hello"
      amount="0.1"
    />
  );
}

export default Transactions;
