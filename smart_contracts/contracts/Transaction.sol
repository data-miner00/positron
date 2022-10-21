// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Transaction {
    struct TransferDetails {
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    TransferDetails[] transactions;
    uint256 transactionCounter;
    uint256 totalVolume;

    mapping(address => uint256) public accountTxCounts;
    mapping(address => uint256) public accountSendVolumes;
    mapping(address => uint256) public accountReceiveVolumes;

    event Transfer(address sender, address receiver, uint amount, string message, uint256 timestamp, string keyword);

    function commit(address payable receiver, uint amount, string memory message, string memory keyword) public {
        transactionCounter++;
        totalVolume += amount;
        accountTxCounts[msg.sender]++;
        accountSendVolumes[msg.sender] += amount;
        accountReceiveVolumes[receiver] += amount;

        transactions.push(TransferDetails(msg.sender, receiver, amount, message, block.timestamp, keyword));

        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
    }

    function getAllTransactions() public view returns (TransferDetails[] memory) {
        return transactions;
    }

    function getTransactionCount() public view returns (uint256) {
        return transactionCounter;
    }

    function getTotalVolume() public view returns (uint256) {
        return totalVolume;
    }

    function getRank() public view returns (string memory) {
        uint sentAmount = accountSendVolumes[msg.sender];

        if (sentAmount > 30 ether) {
            return "S+";
        } else if (sentAmount > 10 ether) {
            return "S";
        } else if (sentAmount > 5 ether) {
            return "A";
        } else if (sentAmount > 1 ether) {
            return "B";
        } else if (sentAmount > 0) {
            return "C";
        } else {
            return "D";
        }
    }
}
