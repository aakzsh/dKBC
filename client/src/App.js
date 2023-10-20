// import logo from './logo.svg';
import './App.css';
import Web3 from 'web3';
import {useEffect} from "react";


function App() {
  const provider = new Web3.providers.HttpProvider('http://localhost:7545');
  const web3 = new Web3(provider);
  const contractAddress = '0x60D17E33Fd763a4e801202dF866876F4b6fF689a'; // Replace this with the address of your smart contract
const contractABI = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "acceptLoanRequest",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "totalAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "interestRate",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "currency",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "timePeriodInDays",
				"type": "uint256"
			}
		],
		"name": "createLoanRequest",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "generateRandomNumber",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllActiveLoanRequest",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "borrowerAddress",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "totalAmount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "interestRate",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "currency",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "timePeriodInDays",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "timeStamp",
						"type": "uint256"
					}
				],
				"internalType": "struct cryptoTransaction.BorrowerRequest[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "lenderAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "isFromLender",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "contractId",
				"type": "uint256"
			}
		],
		"name": "payInstallment",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
const contract = new web3.eth.Contract(contractABI, contractAddress);
useEffect(()=>{
  async function getData(){
    // const ans = await contract.methods.generateRandomNumber().call  ({from: "0xF95d89B84c80E81A1248a2bb8a05E30a2A91C706"})
    
    // const ans = await contract.methods.createLoanRequest(69, 102, "checking new data", 922).send  ({from: "0xF95d89B84c80E81A1248a2bb8a05E30a2A91C706", gas: '1000000'})
    // const ans = await contract.methods.acceptLoanRequest("75192074927416402896654055352093033279756002581044073044730772201658196889210").send({from: "0xF95d89B84c80E81A1248a2bb8a05E30a2A91C706", gas: '1000000'})
    const ans = await contract.methods.getAllActiveLoanRequest().call  ({from: "0xF95d89B84c80E81A1248a2bb8a05E30a2A91C706"})
    // const ans = await contract.methods.push(3).call({from: "0xF95d89B84c80E81A1248a2bb8a05E30a2A91C706"})
    // const ans = await contract.methods.getTaskCount().call({from: "0xF95d89B84c80E81A1248a2bb8a05E30a2A91C706"})
    console.log("hehe " ,ans)
    
  }
  getData();
  
}, [contract.methods])
  return (
    <p>hehe</p>
  );
}

export default App;
