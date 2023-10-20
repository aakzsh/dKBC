import styles from "./Payment.module.css";
import logo from "../../images/dKBC.svg";
const Payment = () => {
  return (
    <div className={styles.body}>
     <div className={styles.dkbcdiv}>
     <p className={styles.dkbc}>dKBC</p>
    <img src={logo} className={styles.imglogo} alt="" />

     </div>
      <button className={styles.zkloginbtn}>ZKLOGIN WITH SUI</button>
     
      <div className={styles.bottomwrapper}>
      <div className={styles.bottom}>
      <h3 className={styles.title}>decentralized Kaun Banega Crorepati</h3>
      <p className={styles.subtitle}>
        A decentralized and actually rewarding version of the infamous Kaun
        Banega Crorepati Game! login anonymously. test out your knowledge. win
        money in crypto
      </p>
      <div className={styles.btnswrapper}>
        <button className={styles.actionbtn}>PLAY NOW</button>
        <button className={styles.actionbtn}>RULES</button>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Payment;
