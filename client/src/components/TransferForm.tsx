import React, { useContext, useRef } from "react";
import { TransactionContext } from "../context/TransactionContext";
import Button from "./Button";
import Input from "./Input";

import "./TransferForm.css";

function TransferForm() {
  const { handleChange, formData, sendTransaction } =
    useContext<any>(TransactionContext);

  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const { addressTo, amount, keyword, message } = formData;

    if (!addressTo || !amount || !keyword || !message)
      return alert("Invalid form");

    sendTransaction();

    formRef?.current?.reset();
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="transfer-form">
      <h1>Who do you want to send today?</h1>
      <Input
        placeholder="Address To"
        type="text"
        name="addressTo"
        handleChange={handleChange}
      />
      <Input
        placeholder="Amount (ETH)"
        type="number"
        name="amount"
        handleChange={handleChange}
      />
      <Input
        placeholder="Keyword"
        type="text"
        name="keyword"
        handleChange={handleChange}
      />
      <Input
        placeholder="Enter Message"
        type="text"
        name="message"
        handleChange={handleChange}
      />

      <Button type="submit" primary label="Deliver Now" />
    </form>
  );
}

export default TransferForm;
