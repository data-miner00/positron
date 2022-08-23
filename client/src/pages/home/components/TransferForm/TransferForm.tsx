import React, { useContext, useRef, useState } from "react";

import { TransactionFormAttributes } from "pages/home/models";
import { AppContext } from "setup/app-context-manager/AppContext";
import { Transaction } from "setup/app-context-manager/models";
import { sendTransactionAsync } from "setup/app-context-manager/utils";
import { TransactionsContext } from "setup/app-context-manager/TransactionsContext";
import Button from "common/components/Button";
import Input from "common/components/Input";

import "./TransferForm.css";

const { ethereum } = window;

type TransferFormProps = {
  onSuccess?: () => void;
  onFailure?: () => void;
};

function TransferForm({ onSuccess, onFailure }: TransferFormProps) {
  const { currentAccount, updateBalanceAsync } = useContext(AppContext);
  const { setTransactions } = useContext(TransactionsContext);

  const initialState: TransactionFormAttributes = {
    addressTo: "",
    amountInEth: "",
    keyword: "",
    message: "",
  };

  const [txFormData, setTxFormData] = useState<TransactionFormAttributes>({
    ...initialState,
  });

  async function onFormSubmitAsync(event: React.FormEvent<HTMLFormElement>) {
    const { addressTo, amountInEth, keyword, message } = txFormData;
    event.preventDefault();

    if (!addressTo || !amountInEth || !keyword || !message) {
      onFailure && onFailure();
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

    try {
      await sendTransactionAsync(ethereum, tx);
      onSuccess && onSuccess();
    } catch (error: unknown) {
      console.error(error);
      onFailure && onFailure();
    }

    setTransactions((prevTxs: Array<Transaction>) => [tx, ...prevTxs]);
    clearFormUI();
    setTxFormData({ ...initialState });
    await updateBalanceAsync();
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

  function clearFormUI() {
    formRef?.current?.reset();
  }

  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form ref={formRef} onSubmit={onFormSubmitAsync} className="transfer-form">
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
