// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.0 <0.9.0;

contract cryptoTransaction {
    uint256 transactionCount;

    struct LenderTransaction {
        uint amount;
        address from;
        address to;
        bool isFromLender;
        uint timeStamp;
        uint contractId;
    }

    struct LenderContract {
        uint id;
        uint totalAmount;
        uint interestRate;
        string currency;
        uint timePeriodInDays;
        uint timeStamp;
        address borrowerAddress;
        address lenderAddress;
    }

    struct BorrowerRequest {
        uint256 id;
        address borrowerAddress;
        uint totalAmount;
        uint interestRate;
        string currency;
        uint timePeriodInDays;
        uint timeStamp;
    }
    BorrowerRequest[] activeLoanRequests;
    LenderTransaction[] transactions;
    LenderContract[] contracts;

    function generateRandomNumber() public view returns (uint256) {
        // Get the current block timestamp
        uint timestamp = block.timestamp;

        // Hash the timestamp
        bytes32 hash = keccak256(abi.encodePacked(timestamp));

        // Convert the hash to a uint
        uint randomNumber = uint(hash);

        // Return the random number
        // return string(abi.encodePacked(randomNumber));
        return randomNumber;
    }

    function createLoanRequest(
        uint totalAmount,
        uint interestRate,
		
        string memory currency,
        uint timePeriodInDays
    ) public {
		BorrowerRequest memory brw = BorrowerRequest(
                generateRandomNumber(),
                msg.sender,
                totalAmount,
                interestRate,
                currency,
                timePeriodInDays,
                block.timestamp
            );
        activeLoanRequests.push(
            brw
        );
    }

    function acceptLoanRequest(uint256  id) public {
        BorrowerRequest memory current;
        uint ind = 0;
        for (uint i = 0; i < activeLoanRequests.length; i++) {
            if (keccak256(abi.encode(activeLoanRequests[i].id)) == keccak256(abi.encode(id))) {
                current = activeLoanRequests[i];
                ind = i;
                break;
            }
        }
        // activeLoanRequests.pop();
        uint blockId = contracts.length + 1;
        contracts.push(
            LenderContract(
                blockId,
                current.totalAmount,
                current.interestRate,
                current.currency,
                current.timePeriodInDays,
                block.timestamp,
                current.borrowerAddress,
                msg.sender
            )
        );
        // initiate transaction
        require(ind < activeLoanRequests.length, string.concat("ind is invalid", string(abi.encode(ind))));
        delete activeLoanRequests[ind];
        payInstallment(payable(msg.sender), current.totalAmount, true, blockId);
    }

    function payInstallment(
        address payable lenderAddress,
        uint amount,
        bool isFromLender,
        uint contractId
    ) public {
        transactionCount += 1;
        transactions.push(
            LenderTransaction(
                amount,
                msg.sender,
                lenderAddress,
                isFromLender,
                block.timestamp,
                contractId
            )
        );
    }

    function getAllActiveLoanRequest()
        public
        view
        returns (BorrowerRequest[] memory)
    {
		// logX(activeLoanRequests);
		// return [BorrowerRequest(1, msg.sender, 1, 1, "sss", 1, 1)];
        return activeLoanRequests;
    }

	
}
