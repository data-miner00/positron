import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/constants";

// type State = {};

//@ts-ignore
export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );

  return transactionContract;
};

type Props = {
  children: JSX.Element;
};

// type State = {}
// type Action = {}

// function transactionReducer() {

// }

export const TransactionProvider = ({ children }: Props) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [formData, setFormData] = useState({
    addressTo: "",
    amount: "",
    keyword: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [transactionCount, setTransactionCount] = useState(
    localStorage.getItem("transactionCount") ?? 0
  );
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState("0");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    setFormData((prevState) => ({ ...prevState, [name]: event.target.value }));
  };

  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert("Please install metamask");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);

        await updateDisplayBalance();
      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object.");
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install metamask");

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setCurrentAccount(accounts[0]);
      console.log(accounts);
      await updateDisplayBalance();
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object.");
    }
  };

  const sendTransaction = async () => {
    try {
      if (!ethereum) return alert("Please install metamask");

      const { addressTo, amount, keyword, message } = formData;
      const transactionContract = getEthereumContract();
      const convertedAmount = ethers.utils.parseEther(amount);

      console.log(currentAccount);

      await ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: currentAccount,
            to: addressTo,
            gas: "0x5208", // gas in hex and gwei
            value: convertedAmount._hex,
          },
        ],
      });

      const transactionHash = await transactionContract.commit(
        addressTo,
        convertedAmount,
        message,
        keyword
      );

      setIsLoading(true);
      console.log(`Loading - ${transactionHash.hash}`);
      await transactionHash.wait();

      setIsLoading(false);
      console.log(`Success - ${transactionHash.hash}`);
      const transactionCount = await transactionContract.getTransactionCount();
      setTransactionCount(transactionCount.toNumber());
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object.");
    }
  };

  const updateDisplayBalance = async () => {
    console.log(currentAccount);
    // const balance = await ethereum.request({
    //   method: "eth_getBalance",
    //   params: [currentAccount, "latest"],
    // });

    // console.log(`Balance: ${balance}`);
    // setBalance(Number(ethers.utils.formatEther(balance)).toFixed(2));
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        currentAccount,
        formData,
        setFormData,
        handleChange,
        sendTransaction,
        balance,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

// function useTransaction() {
//   const context = React.createContext(TransactionContext)
//   if (context === undefined) {
//     throw new Error('useTransaction must be used within a TransactionProvider');
//   }
//   return context;
// }

// type TransactionProviderProps = {
//   children: React.ReactNode
// }

// type Action
