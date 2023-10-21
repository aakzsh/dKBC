import { useEffect, useState } from "react";
import logo from "../../images/dKBC.svg";
import styles from "./Game.module.css"
import { useParams } from 'react-router-dom';
import Web3 from 'web3';

const Game = () =>{
    let levels = [0.0001, 0.0002, 0.0003, 0.0005, 0.001, 0.002, 0.004, 0.008, 0.016, 0.032, 0.064, 0.125, 0.250, 0.500, 1];
 
    const provider = new Web3.providers.HttpProvider('http://localhost:7545');
    const web3 = new Web3(provider);
    const [token, setToken] = useState("eyJhbGciOiJSUzI1NiIsImtpZCI6IjdkMzM0NDk3NTA2YWNiNzRjZGVlZGFhNjYxODRkMTU1NDdmODM2OTMiLCJ0eXAiOiJKV1QifQ");
    const contractAddress = '0xd8b934580fcE35a11B58C6D73aDeE468a2833fa8';
    const contractABI = [
        {
            "inputs": [
                {
                    "internalType": "address payable",
                    "name": "player",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "addToTransaction",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "question",
                    "type": "string"
                },
                {
                    "internalType": "string[]",
                    "name": "options",
                    "type": "string[]"
                },
                {
                    "internalType": "uint256",
                    "name": "correct",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "level",
                    "type": "uint256"
                }
            ],
            "name": "createQuestion",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "n",
                    "type": "uint256"
                }
            ],
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
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "level",
                    "type": "uint256"
                }
            ],
            "name": "getQuestion",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "string",
                            "name": "question",
                            "type": "string"
                        },
                        {
                            "internalType": "string[]",
                            "name": "options",
                            "type": "string[]"
                        },
                        {
                            "internalType": "uint256",
                            "name": "correct",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct smartContracts.Question",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]

    const contract = new web3.eth.Contract(contractABI, contractAddress);
    
    useEffect(()=>{
        async function getData(){
          // const ans = await contract.methods.generateRandomNumber().call  ({from: "0xF95d89B84c80E81A1248a2bb8a05E30a2A91C706"})
          
          // const ans = await contract.methods.createLoanRequest(69, 102, "checking new data", 922).send  ({from: "0xF95d89B84c80E81A1248a2bb8a05E30a2A91C706", gas: '1000000'})
          // const ans = await contract.methods.acceptLoanRequest("75192074927416402896654055352093033279756002581044073044730772201658196889210").send({from: "0xD5BF3217ED0c4a5F1AaB4E9e2aD3C1E9D15EAF5E", gas: '1000000'})
          const ans = await contract.methods.generateRandomNumber(4).call  ({from: "0xf8e81D47203A594245E36C48e151709F0C19fBe8", gas: '1000000'})
          // const ans = await contract.methods.push(3).call({from: "0xF95d89B84c80E81A1248a2bb8a05E30a2A91C706"})
          // const ans = await contract.methods.getTaskCount().call({from: "0xF95d89B84c80E81A1248a2bb8a05E30a2A91C706"})
          console.log("hehe " ,ans)
          
        }
        getData();
        
      }, [contract.methods])
    return (
        
        <div>
            <div style={{"float": "right", "padding": "1rem"}}>
                <p>You are logged in</p>
            </div>
            <div className={styles.content}>
                <div className={styles.left}>
                    <img src={logo} alt="" />
                    <div className={styles.helplines}>
                        <div className={styles.rounded}></div>
                        <div className={styles.rounded}></div>
                        <div className={styles.rounded}><p>10</p></div>
                    </div>
                    <div className={styles.questions}>
                        <div className={styles.questbox}>

                        </div>
                        <div className={styles.listedoptions}>
                        <div className={styles.options}>
                            <p>A.</p>
                        </div>
                        <div className={styles.options}>
                            <p>A.</p>
                        </div>
                        <div className={styles.options}>
                            <p>A.</p>
                        </div>
                        <div className={styles.options}>
                            <p>A.</p>
                        </div>
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.levels}>
                        {
                            levels.map((el, index)=>{
                                return <div className={styles.levelshow}><p>{el + " AVAX"}</p>
                                <p>{index+1}</p>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Game;