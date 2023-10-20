import styles from "./Rules.module.css";
import logo from "../../images/dKBC.svg";


const Rules = () =>{
    return (
        <div className={styles.body}>
            <img src={logo} alt="" />
            <p className={styles.title}>Rules for dKBC</p>
            <ul>
                <li>The game is based on cryptocurrency and decentralized authority</li>
                <li>You need to join the game using SUI's anonymous ZK login button</li>
                <li>Start the game</li>
                <li>You'll get rewards for each right question answered, and will also have access to the lifelines to help you get through</li>
                <li>After the game is done, the player can get the reward crypto in their wallet using transfers and cross chain conversions powered by router</li>
            </ul>
        </div>
    )
}

export default Rules;