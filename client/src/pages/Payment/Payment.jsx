import styles from "./Payment.module.css";
const Payment = () => {
  return (
    <div className={styles.body}>
        <div className={styles.popup}>
            <h2 className={styles.congrats}>CONGRATULATIONS!</h2>
            <p>You've won 0.5000 AVAX coins</p>
            <br />
            <p>Complete payment through</p>
            <select name="" className={styles.selectchain} id="">
              <option value="eth">Ethereum</option>
              <option value="btc">Bitcoin</option>
            </select>
            <i><p>You'll receive approximately 0.32 ETH</p></i>
            <input type="text" className={styles.inp} placeholder="enter your crypto wallet address"/>
            <br /><br />
            <button className={styles.txnbtn}>COMPLETE TRANSACTION</button> 
        </div>
    </div>
  );
};

export default Payment;
