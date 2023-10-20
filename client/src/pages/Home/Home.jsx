import styles from "./Home.module.css";
import logo from "../../images/dKBC.svg";
import { generateNonce, generateRandomness } from "@mysten/zklogin";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { SuiClient, getFullnodeUrl } from "@mysten/sui.js/client";
const Home = () => {
  function openGoogleAuthWindow(url) {
    const popup = window.open(url, "Google Auth", "width=400,height=600");
    const checkPopupStatus = setInterval(() => {
      if (popup.closed) {
        clearInterval(checkPopupStatus);
        // Do something after Google authentication is complete.
      }
    }, 1000);
  }

  async function zklogin() {
    const REDIRECT_URI = "http://localhost:3000/game";

    const FULLNODE_URL = "https://fullnode.devnet.sui.io"; // replace with the RPC URL you want to use
    const suiClient = new SuiClient({ url: FULLNODE_URL });
    const { epoch, epochDurationMs, epochStartTimestampMs } =
      await suiClient.getLatestSuiSystemState();
    const maxEpoch = Number(epoch) + 2; // this means the ephemeral key will be active for 2 epochs from now.
    const ephemeralKeyPair = new Ed25519Keypair();
    const randomness = generateRandomness();
    const nonce = generateNonce(
      ephemeralKeyPair.getPublicKey(),
      maxEpoch,
      randomness
    );

    const params = new URLSearchParams({
      // See below for how to configure client ID and redirect URL
      client_id:
        "1078022756750-gc74l9prg9gd3oe5e6n8rjgc23k30t44.apps.googleusercontent.com",
      redirect_uri: REDIRECT_URI,
      response_type: "id_token",
      scope: "openid",
      // See below for details about generation of the nonce
      nonce: nonce,
    });

    const loginURL = `https://accounts.google.com/o/oauth2/v2/auth?${params}`;
    // window.open("sssssss")
    window.location.href = loginURL
    // openGoogleAuthWindow(loginURL)
    console.log(loginURL);
  }

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
            Banega Crorepati Game! login anonymously. test out your knowledge.
            win money in crypto
          </p>
          <div className={styles.btnswrapper}>
            <button onClick={() => zklogin()} className={styles.actionbtn}>
              PLAY NOW
            </button>
            <button className={styles.actionbtn}>RULES</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
