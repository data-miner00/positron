// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Transaction {
    uint256 transactionCounter;

    event Transfer(address sender, address receiver, uint amount, string message, uint256 timestamp, string keyword);

    struct TransferDetails {
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    TransferDetails[] transactions;

    function commit(address payable receiver, uint amount, string memory message, string memory keyword) public {
        transactionCounter++;
        transactions.push(TransferDetails(msg.sender, receiver, amount, message, block.timestamp, keyword));

        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
    }

    function getAllTransactions() public view returns (TransferDetails[] memory) {
        return transactions;
    }

    function getTransactionCount() public view returns (uint256) {
        return transactionCounter;
    }
}
