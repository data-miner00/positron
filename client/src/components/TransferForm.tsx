import React from "react";
import Button from "./Button";
import Input from "./Input";

import "./TransferForm.css";

function TransferForm() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(event);
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="transfer-form">
      <h1>Who do you want to send today?</h1>
      <Input
        placeholder="Address To"
        type="text"
        name="addressTo"
        handleChange={() => {}}
      />
      <Input
        placeholder="Amount (ETH)"
        type="text"
        name="amount"
        handleChange={() => {}}
      />
      <Input
        placeholder="Keyword"
        type="text"
        name="keyword"
        handleChange={() => {}}
      />
      <Input
        placeholder="Enter Message"
        type="text"
        name="message"
        handleChange={() => {}}
      />

      <Button type="submit" primary label="Deliver Now" />
    </form>
  );
}

export default TransferForm;
