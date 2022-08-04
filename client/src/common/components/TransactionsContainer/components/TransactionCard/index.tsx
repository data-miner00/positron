import { useId } from "react";
import { FaEthereum } from "react-icons/fa";
import useGiphy from "common/hooks/useGiphy";
import { shortenAddress } from "utils/shortenAddress";
import { TransactionCardProps } from "../../../../../pages/home/models";
import "./styles.css";

function TransactionCard({
  addressTo,
  addressFrom,
  timestamp,
  keyword,
  amount,
  message,
}: TransactionCardProps) {
  const gifUrl = useGiphy(keyword);
  const id = useId();
  return (
    <div className="transaction">
      <div className="image">
        <img height="150" src={gifUrl} alt="gif" />
      </div>

      <div className="txinfo">
        <div className="sender field">
          <label htmlFor={`sender-${id}`}>Sender</label>
          <span id={`sender-${id}`}>{shortenAddress(addressFrom, 8)}</span>
        </div>
        <div className="receiver field">
          <label htmlFor={`receiver-${id}`}>Receiver</label>
          <span id={`receiver-${id}`}>{shortenAddress(addressTo, 8)}</span>
        </div>
        <div className="message field">
          <label htmlFor={`message-${id}`}>Message</label>
          <span id={`message-${id}`}>{message}</span>
        </div>
        <div className="amount field">
          <label htmlFor={`amount-${id}`}>Amount</label>
          <span id={`amount-${id}`}>
            <FaEthereum /> {amount}
          </span>
        </div>
        <div className="line-deco" aria-hidden></div>
        <div className="timestamp">{timestamp}</div>
      </div>
    </div>
  );
}

export default TransactionCard;
