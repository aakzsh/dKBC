import styles from "./Payment.module.css";
import logo from "../../images/dKBC.svg";
const Payment = () => {
  return (
    <div className={styles.body}>
        <div className={styles.popup}>
            <h2 className={styles.congrats}>CONGRATULATIONS!</h2>
            <p>You've won 0.5000 AVAX coins</p>
            <br />
            <p>Complete payment through</p>
            <i><p>You'll receive approximately 0.32 ETH</p></i>
            <input type="text" placeholder="enter your crypto wallet address"/>
            <button className={styles.txnbtn}>COMPLETE TRANSACTION</button>
        </div>
    </div>
  );
};

export default Payment;
