import { TransactionFormAttributes } from "pages/home/models";
import React, { useContext, useRef, useState } from "react";
import { AppContext } from "setup/app-context-manager/AppContext";
import { Transaction } from "setup/app-context-manager/models";
import { sendTransactionAsync } from "setup/app-context-manager/utils";
import Button from "common/components/Button";
import Input from "common/components/Input";

import "./TransferForm.css";

const { ethereum } = window;

function TransferForm() {
  const { currentAccount } = useContext(AppContext);

  const [txFormData, setTxFormData] = useState<TransactionFormAttributes>({
    addressTo: "",
    amountInEth: "",
    keyword: "",
    message: "",
  });

  async function onFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    console.log(ethereum, txFormData);

    const { addressTo, amountInEth, keyword, message } = txFormData;
    event.preventDefault();

    if (!addressTo || !amountInEth || !keyword || !message) {
      return;
    }

    const tx: Transaction = {
      addressFrom: currentAccount,
      addressTo,
      amount: amountInEth,
      keyword,
      message,

      // unused fields
      timestamp: new Date(),
    };

    await sendTransactionAsync(ethereum, tx);
  }

  function onFormChange(
    event: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) {
    setTxFormData((prevState) => ({
      ...prevState,
      [name]: event.target.value,
    }));
  }

  function clearFormData() {
    formRef?.current?.reset();
  }

  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form ref={formRef} onSubmit={onFormSubmit} className="transfer-form">
      <h1>Who do you want to send today?</h1>
      <Input
        placeholder="Address To"
        type="text"
        name="addressTo"
        handleChange={onFormChange}
      />
      <Input
        placeholder="Amount (ETH)"
        type="number"
        name="amountInEth"
        handleChange={onFormChange}
      />
      <Input
        placeholder="Keyword"
        type="text"
        name="keyword"
        handleChange={onFormChange}
      />
      <Input
        placeholder="Enter Message"
        type="text"
        name="message"
        handleChange={onFormChange}
      />

      <Button type="submit" primary label="Deliver Now" onClick={console.log} />
    </form>
  );
}

export default TransferForm;
