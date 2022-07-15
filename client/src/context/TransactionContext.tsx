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
  // Connected Metamask account
  const [currentAccount, setCurrentAccount] = useState("");

  // Form values for making transaction
  const [formData, setFormData] = useState({
    addressTo: "",
    amount: "",
    keyword: "",
    message: "",
  });

  // Uncertain usages
  const [isLoading, setIsLoading] = useState(false);
  const [transactionCount, setTransactionCount] = useState(
    localStorage.getItem("transactionCount") ?? 0
  );

  // All transactions
  const [transactions, setTransactions] = useState([]);

  // Account balance
  const [balance, setBalance] = useState("0");

  // Form change listener
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    setFormData((prevState) => ({ ...prevState, [name]: event.target.value }));
  };

  // Check of metamask is connected
  const checkIfWalletIsConnected = async () => {
    if (!ethereum && !ethereum.isMetamask)
      return alert("Please install metamask");

    try {
      const accounts = await ethereum.request({ method: "eth_accounts" });

      // If
      if (accounts.length) {
        setCurrentAccount(accounts[0]);

        await getAllTransactions();
        console.log(transactions);
      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object.");
    }
  };

  const getAllTransactions = async () => {
    try {
      if (ethereum) {
        const transactionsContract = getEthereumContract();

        const availableTransactions =
          await transactionsContract.getAllTransactions();

        const structuredTransactions = availableTransactions.map(
          (transaction: any) => ({
            addressTo: transaction.receiver,
            addressFrom: transaction.sender,
            timestamp: new Date(transaction.timestamp.toNumber() * 1000),
            message: transaction.message,
            keyword: transaction.keyword,
            amount: parseInt(transaction.amount._hex) / 10 ** 18,
          })
        );

        console.log(structuredTransactions);

        setTransactions(structuredTransactions);
      } else {
        console.log("Ethereum is not present");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfTransactionsExists = async () => {
    try {
      if (ethereum) {
        const transactionsContract = getEthereumContract();
        const currentTransactionCount =
          await transactionsContract.getTransactionCount();

        localStorage.setItem("transactionCount", currentTransactionCount);
      }
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install metamask");

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setCurrentAccount(accounts[0]);
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
    const provider = new ethers.providers.Web3Provider(ethereum);

    const balance = await provider.getBalance(currentAccount);
    const balanceInEth = Number(ethers.utils.formatEther(balance)).toFixed(2);

    setBalance(balanceInEth);
    // const balance = await ethereum.request({
    //   method: "eth_getBalance",
    //   params: [currentAccount, "latest"],
    // });

    // console.log(`Balance: ${balance}`);
    // setBalance(Number(ethers.utils.formatEther(balance)).toFixed(2));
  };

  useEffect(() => {
    checkIfWalletIsConnected();
    checkIfTransactionsExists();
  }, []);

  useEffect(() => {
    updateDisplayBalance();
  }, [currentAccount]);

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
        transactions,
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
