// import logo from './logo.svg';
import './App.css';
import Web3 from 'web3';
import {useEffect} from "react";


function App() {
  const provider = new Web3.providers.HttpProvider('http://localhost:7545');
  const web3 = new Web3(provider);
  const contractAddress = '0x56acd94b514620A00C6567888Fd0Ca940D887c02'; // Replace this with the address of your smart contract
const contractABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_task",
				"type": "string"
			}
		],
		"name": "addTask",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_taskIndex",
				"type": "uint256"
			}
		],
		"name": "deleteTask",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_taskIndex",
				"type": "uint256"
			}
		],
		"name": "getTask",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "task",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "isDone",
						"type": "bool"
					}
				],
				"internalType": "struct Bloc.Task",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getTaskCount",
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
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_taskIndex",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "_status",
				"type": "bool"
			}
		],
		"name": "updateStatus",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
const contract = new web3.eth.Contract(contractABI, contractAddress);
useEffect(()=>{
  async function getData(){
    const ans = await contract.methods.addTask("add task").send({from: "0x775966141574A35512C440eB6e69a38c425bd256"})
    // const ans = await contract.methods.getTask(0).send({ from: "0x775966141574A35512C440eB6e69a38c425bd256" })
    console.log("ans is ", ans);
  }
  getData();
  
}, [contract.methods])
  return (
    <p>hehe</p>
  );
}

export default App;
