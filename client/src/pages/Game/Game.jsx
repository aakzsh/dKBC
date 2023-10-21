import { useEffect, useState } from "react";
import logo from "../../images/dKBC.svg";
import styles from "./Game.module.css";
import { useNavigate, useParams } from "react-router-dom";
import Web3 from "web3";
import fifty from "../../images/5050.svg";
import audience from "../../images/audience.svg";
import MoneyLevel from "../../components/MoneyLevel/MoneyLevel";

const Game = () => {
  let levels = [
    0.0001, 0.0002, 0.0003, 0.0005, 0.001, 0.002, 0.004, 0.008, 0.016, 0.032,
    0.064, 0.125, 0.25, 0.5, 1,
  ];

  const provider = new Web3.providers.HttpProvider("http://localhost:7545");
  const web3 = new Web3(provider);
  const [used, setUsed] = useState([false, false])
  const navigate = useNavigate();
  const [selected, setSelected] = useState(0);
  const [token, setToken] = useState(
    "eyJhbGciOiJSUzI1NiIsImtpZCI6IjdkMzM0NDk3NTA2YWNiNzRjZGVlZGFhNjYxODRkMTU1NDdmODM2OTMiLCJ0eXAiOiJKV1QifQ"
  );
  const contractAddress = "0x6A6d2a5A3Ce75A31C9f5335deD307bFB03Ea7eba";
  const contractABI = [
    {
      inputs: [
        {
          internalType: "address payable",
          name: "player",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "addToTransaction",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "question",
          type: "string",
        },
        {
          internalType: "string[]",
          name: "options",
          type: "string[]",
        },
        {
          internalType: "uint256",
          name: "correct",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "level",
          type: "uint256",
        },
      ],
      name: "createQuestion",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "n",
          type: "uint256",
        },
      ],
      name: "generateRandomNumber",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "level",
          type: "uint256",
        },
      ],
      name: "getQuestion",
      outputs: [
        {
          components: [
            {
              internalType: "string",
              name: "question",
              type: "string",
            },
            {
              internalType: "string[]",
              name: "options",
              type: "string[]",
            },
            {
              internalType: "uint256",
              name: "correct",
              type: "uint256",
            },
          ],
          internalType: "struct smartContracts.Question",
          name: "",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ];
  const [currentQues, setCurrentQues] = useState([
    "dummy ques",
    ["1", "2", "3", "4"],
    "0",
    "1",
  ]);
  const contract = new web3.eth.Contract(contractABI, contractAddress);
  async function checkAns(ind) {
    if (ind === currentQues[2]) {
      alert("Correct answer");
      if (selected === 14) {
        navigate("/payment");
      }
      else{
        setSelected(selected + 1);
      }
      

      
    } else {
      alert("wrong answer");
      navigate("/payment");
    }
  }
  async function cuseAud(){
    if(used[1]){
        alert("Already used")
    }
    else{
        let temp = used;
        temp[1] = true;
        setUsed(temp)
        setSelected(selected+1)
    }
  }

  async function cuseFifty(){
    if(used[0]){
        alert("Already used")
    }
    else{
        let dummy = currentQues;
        // dummy = []
        let ans = parseInt(dummy[2]);
    
        let op2 = Math.floor(Math.random() * 3);
    
        while (op2 === ans) {
            op2 = Math.floor(Math.random() * 3);
        }
        let check = []
        // check 
        for(let i=0;i<4;i++){
            if(i===op2 || i===ans){
    check[i] = dummy[1][i]
            }
            else{
                check[i]=""
            }
        }
    
        setCurrentQues([currentQues[0], check ,currentQues[2]]);
        let temp = used;
        temp[0] = true;
        setUsed(temp)
    }
    
  }
  useEffect(() => {
    async function getData() {
      // const ans = await contract.methods.generateRandomNumber().call  ({from: "0xF95d89B84c80E81A1248a2bb8a05E30a2A91C706"})
      // await contract.methods.createQuestion("What is the capital of France?", ["London", "Berlin", "Paris", "Rome"], 2, 1)
      // await contract.methods.createQuestion("What is the largest ocean in the world?", ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"], 0, 1).send  ({from: "0xb07ADD42447765844E3a9f2B4A13Ab80b221C2b9", gas: '1000000'})
      // await contract.methods.createQuestion("What is the square root of 16?", ["2", "4", "8", "16"], 1, 2).send  ({from: "0xb07ADD42447765844E3a9f2B4A13Ab80b221C2b9", gas: '1000000'})
      // await contract.methods.createQuestion("Who was the first president of the United States?", ["George Washington", "John Adams", "Thomas Jefferson", "James Madison"], 0, 3).send  ({from: "0xb07ADD42447765844E3a9f2B4A13Ab80b221C2b9", gas: '1000000'})
      // await contract.methods.createQuestion("What is the chemical symbol for water?", ["H2O", "CO2", "O2", "N2"], 0, 4).send  ({from: "0xb07ADD42447765844E3a9f2B4A13Ab80b221C2b9", gas: '1000000'})

      // await contract.methods.createQuestion("Which planet is the closest to the Sun?", ["Mercury", "Venus", "Earth", "Mars"], 0, 5).send  ({from: "0xb07ADD42447765844E3a9f2B4A13Ab80b221C2b9", gas: '1000000'})
      // await contract.methods.createQuestion("What is the name of the largest rainforest in the world?", ["Amazon rainforest", "Congo rainforest", "Bornean rainforest", "Daintree rainforest"], 0, 6).send  ({from: "0xb07ADD42447765844E3a9f2B4A13Ab80b221C2b9", gas: '1000000'})
      // await contract.methods.createQuestion("What is the Pythagorean theorem?", ["a^2 + b^2 = c^2", "a^2 - b^2 = c^2", "a^2 + b^2 = ab", "a^2 - b^2 = ab"], 0, 7).send  ({from: "0xb07ADD42447765844E3a9f2B4A13Ab80b221C2b9", gas: '1000000'})
      // await contract.methods.createQuestion("Who wrote the novel 'Pride and Prejudice'?", ["Jane Austen", "Charlotte Brontë", "Charles Dickens", "Emily Brontë"], 0, 8).send  ({from: "0xb07ADD42447765844E3a9f2B4A13Ab80b221C2b9", gas: '1000000'})
      // await contract.methods.createQuestion("What is the capital of Australia?", ["Sydney", "Melbourne", "Brisbane", "Canberra"], 3, 9).send  ({from: "0xb07ADD42447765844E3a9f2B4A13Ab80b221C2b9", gas: '1000000'})

      // await contract.methods.createQuestion("What is the chemical symbol for gold?", ["Au", "Ag", "Cu", "Fe"], 0, 10).send  ({from: "0xb07ADD42447765844E3a9f2B4A13Ab80b221C2b9", gas: '1000000'})
      // await contract.methods.createQuestion("What is the name of the largest mountain in the world?", ["Mount Everest", "K2", "Mount Kilimanjaro", "Mount Fuji"], 0, 11).send  ({from: "0xb07ADD42447765844E3a9f2B4A13Ab80b221C2b9", gas: '1000000'})
      // await contract.methods.createQuestion("Who was the 35th president of the United States?", ["John F. Kennedy", "Lyndon B. Johnson", "Richard Nixon", "Gerald Ford"], 3, 12).send  ({from: "0xb07ADD42447765844E3a9f2B4A13Ab80b221C2b9", gas: '1000000'})
      // await contract.methods.createQuestion("What is the name of the largest ocean in the solar system?", ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Oceanus Procellarum"], 3, 13).send  ({from: "0xb07ADD42447765844E3a9f2B4A13Ab80b221C2b9", gas: '1000000'})
      // await contract.methods.createQuestion("What is the name of the most distant planet from the Sun?", ["Mercury", "Venus", "Earth", "Neptune"], 3, 14).send  ({from: "0xb07ADD42447765844E3a9f2B4A13Ab80b221C2b9", gas: '1000000'})

      const ans2 = await contract.methods
        .getQuestion(selected)
        .call({ from: "0xb07ADD42447765844E3a9f2B4A13Ab80b221C2b9" });
      setCurrentQues(ans2);
      console.log("hehe ", ans2);
    }
    getData();
  }, [selected]);
  return (
    <div>
      <div style={{ float: "right", padding: "1rem" }}>
        <p>You are logged in</p>
      </div>
      <div className={styles.content}>
        <div className={styles.left}>
          <img src={logo} alt="" />
          <div className={styles.helplines}>
            <div className={styles.rounded} style={{"opacity":used[0]?"0.2":"1"}} onClick={()=>cuseFifty()}>
              <img src={fifty} className={styles.lifelineicon} alt="" />
            </div>
            <div className={styles.rounded} style={{"opacity":used[1]?"0.2":"1"}} onClick={()=>cuseAud()}>
              <img src={audience} className={styles.lifelineicon} alt="" />
            </div>
            {/* <div className={styles.rounded}><p>10</p></div> */}
          </div>
          <div className={styles.questions}>
            <div className={styles.questbox}>
              <h4 className={styles.questext}>{currentQues[0]}</h4>
            </div>
            <div className={styles.listedoptions}>
              <div className={styles.options} onClick={() => checkAns("0")}>
                <p className={styles.optionstext}>A. {currentQues[1][0]}</p>
              </div>
              <div className={styles.options} onClick={() => checkAns("1")}>
                <p className={styles.optionstext}>B. {currentQues[1][1]}</p>
              </div>
              <div className={styles.options} onClick={() => checkAns("2")}>
                <p className={styles.optionstext}>C. {currentQues[1][2]}</p>
              </div>
              <div className={styles.options} onClick={() => checkAns("3")}>
                <p className={styles.optionstext}>D. {currentQues[1][3]}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.levels}>
            {levels.map((el, index) => {
              return <MoneyLevel index={index} el={el} selected={selected} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
