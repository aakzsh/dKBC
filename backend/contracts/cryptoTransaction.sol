// SPDX-License-Identifier: GPL-3.0 
pragma solidity >=0.8.0 <0.9.0; 
/// @title A contract for demonstrate how to build a to-do list application
/// @notice For now, this contract just show how to add/delete/get/update/count the task
contract smartContracts{
    // Defining a structure to
    // store a task
    struct Question {
        string question;
        string [] options;
        uint correct;
    }

    mapping(uint => Question[]) questions;

    struct Transaction {
        address from;
        address to;
        uint amount;
        uint timestamp;
    }

    Transaction[] transactions; 

    function addToTransaction(address payable player, uint amount) public {
        transactions.push(Transaction(
            msg.sender,
            player,
            amount,
            block.timestamp
        ));
    } 

    function createQuestion(string calldata question, string[] calldata options, uint correct, uint level) public {
        questions[level].push(Question(
            question,
            options,
            correct
        ));
    }

    function getQuestion(uint level) external returns (Question memory) {
        uint currentLevelQuestioncount = questions[level].length;
        uint randomNum = generateRandomNumber(currentLevelQuestioncount);

        return questions[level][randomNum];

    }

    function generateRandomNumber(uint n) public  view returns (uint) {
        return uint(keccak256(abi.encodePacked(block.timestamp,block.difficulty,  
        msg.sender))) % n;
    }
}
