
// SPDX-License-Identifier: GPL-3.0 
pragma solidity >=0.8.0 <0.9.0;  
/// @title A contract for demonstrate how to build a to-do list application
/// @notice For now, this contract just show how to add/delete/get/update/count the task
contract cryptoTransaction{
    // Defining a structure to
    // store a task
    struct LenderTransaction
    {
        uint amount;
        address from;
        address to;
        bool isFromLender;
        uint timeStamp;
        address contractId;
    }

    struct LenderContract
    {
        uint id;
        uint totalAmount;
        uint interestRate;
        uint currency;
        uint timePeriodInDays; 
        uint timeStamp;
        address borrowerAddress;
        address lenderAddress;
    }

    struct BorrowerRequest
    {
        address borrowerAddress;
        uint totalAmount;
        uint interestRate;
        uint currency;
        uint timePeriodInDays; 
        uint timeStamp;
    }

    mapping (address => BorrowerRequest[]) private activeLoanRequests;

    function createLoanRequest(address borrowerAddress, BorrowerRequest memory borrowerRequest) public {

    }

    function acceptLoanRequest(BorrowerRequest memory borrowerRequest, address accepterAddress) private {
        // set active to false
    }

    function payInstallment(LenderTransaction memory lenderTransaction) private {

    }

    // function getAllActiveLoanRequest()public view returns (BorrowerRequest[] memory){
    //     // return the map
    //     return activeLoanRequests;
    // }



 
}
