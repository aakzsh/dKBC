import logo from "../../images/dKBC.svg";
import styles from "./Game.module.css"

const Game = () =>{
    let levels = [0.0001, 0.0002, 0.0003, 0.0005, 0.001, 0.002, 0.004, 0.008, 0.016, 0.032, 0.064, 0.125, 0.250, 0.500, 1];
    return (
        
        <div>
            <div style={{"float": "right", "padding": "1rem"}}>
                <p>Logged in as {"hemhe"}</p>
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