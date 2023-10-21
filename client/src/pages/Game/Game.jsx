import { useEffect, useState } from "react";
import logo from "../../images/dKBC.svg";
import styles from "./Game.module.css"
import { useParams } from 'react-router-dom';
import fifty from "../../images/5050.svg"
import audience from "../../images/audience.svg"
import MoneyLevel from "../../components/MoneyLevel/MoneyLevel";

const Game = () =>{
    let levels = [0.0001, 0.0002, 0.0003, 0.0005, 0.001, 0.002, 0.004, 0.008, 0.016, 0.032, 0.064, 0.125, 0.250, 0.500, 1];
 
        const params = useParams();
    const [token, setToken] = useState("eyJhbGciOiJSUzI1NiIsImtpZCI6IjdkMzM0NDk3NTA2YWNiNzRjZGVlZGFhNjYxODRkMTU1NDdmODM2OTMiLCJ0eXAiOiJKV1QifQ")
    const [selected, setSelected] = useState(0)
    useEffect(()=>{
        async function getToken(){
            const url = window.location.toString();
            console.log(url)
            let right = await url.split("#")[1].split(".")[0].split("=")[1]
            // let token =await right.split(".")[0]
            // const id = params.id_token;
            console.log("id hai ", right)
            await sessionStorage.setItem("token", right)
            setToken(right)
            // await setToken()
        }
        async function setToken(){
            const tok = await sessionStorage.getItem("token")
            console.log("setted from ", tok)
            setToken(tok)
        }
        // getToken()
        // setToken()
    }, [])
    useEffect(()=>{
       console.log(token)
    }, [token])
    return (
        
        <div>
            <div style={{"float": "right", "padding": "1rem"}}>
                <p>You are logged in</p>
            </div>
            <div className={styles.content}>
                <div className={styles.left}>
                    <img src={logo} alt="" />
                    <div className={styles.helplines}>
                        <div className={styles.rounded}><img src={fifty} className={styles.lifelineicon} alt="" /></div>
                        <div className={styles.rounded}><img src={audience} className={styles.lifelineicon} alt="" /></div>
                        {/* <div className={styles.rounded}><p>10</p></div> */}
                    </div>
                    <div className={styles.questions}>
                        <div className={styles.questbox}>
                            <h4 className={styles.questext}>Question here smth smth</h4>
                        </div>
                        <div className={styles.listedoptions}>
                        <div className={styles.options}>
                            <p className={styles.optionstext}>A.</p>
                        </div>
                        <div className={styles.options}>
                            <p className={styles.optionstext}>B.</p>
                        </div>
                        <div className={styles.options}>
                            <p className={styles.optionstext}>C.</p>
                        </div>
                        <div className={styles.options}>
                            <p className={styles.optionstext}>D.</p>
                        </div>
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.levels}>
                        {
                            levels.map((el, index)=>{
                                return <MoneyLevel index={index} el={el} selected={selected}/>
                                
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Game;