import { ethers } from "ethers";
import { contractABI, contractAddress } from "common/constants";
import { Transaction } from "./models";

export function getEthereumObject() {
  const { ethereum } = window;

  return ethereum;
}

export function getContract(ethereum: any) {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );

  return transactionContract;
}

export async function getAllTransactionsAsync(ethereum: any) {
  if (!ethereum) return console.log("No ethereum object");

  const transactionContract = getContract(ethereum);

  const rawTransactions: Array<any> =
    await transactionContract.getAllTransactions();

  const transactions: Array<Transaction> = rawTransactions.map((tx) => ({
    addressTo: tx.receiver,
    addressFrom: tx.sender,
    timestamp: new Date(tx.timestamp.toNumber() * 1000),
    message: tx.message,
    keyword: tx.keyword,
    amount: String(parseInt(tx.amount._hex) / 10 ** 18),
  }));

  return transactions;
}

export async function getWalletAccountsAsync(
  ethereum: any
): Promise<Array<string>> {
  const accounts: Array<string> = await ethereum.request({
    method: "eth_requestAccounts",
  });

  return accounts;
}

export async function sendTransactionAsync(ethereum: any, tx: Transaction) {
  await sendEthersAsync(ethereum, tx);
  await writeToBlockchainAsync(ethereum, tx);
}

async function sendEthersAsync(ethereum: any, tx: Transaction) {
  const convertedAmount = ethers.utils.parseEther(tx.amount);

  await ethereum.request({
    method: "eth_sendTransaction",
    params: [
      {
        from: tx.addressFrom,
        to: tx.addressTo,
        gas: "0x5208", // gas in hex and gwei,
        value: convertedAmount._hex,
      },
    ],
  });
}

async function writeToBlockchainAsync(
  ethereum: any,
  { addressTo, amount, message, keyword }: Transaction
) {
  const transactionContract = getContract(ethereum);
  const convertedAmount = ethers.utils.parseEther(amount);

  const txHash = await transactionContract.commit(
    addressTo,
    convertedAmount,
    message,
    keyword
  );

  await txHash.wait();
}

export async function getAccountBalanceAsync(
  ethereum: any,
  currentAccount: string
) {
  if (!currentAccount) throw new Error("No account provided.");

  const provider = new ethers.providers.Web3Provider(ethereum);
  const balance = await provider.getBalance(currentAccount);
  const balanceInEth = Number(ethers.utils.formatEther(balance)).toFixed(2);

  return balanceInEth;
}
