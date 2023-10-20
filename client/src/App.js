import logo from "./logo.svg";
import { generateNonce, generateRandomness } from "@mysten/zklogin";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { SuiClient, getFullnodeUrl } from "@mysten/sui.js/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import { useEffect } from "react";
import Home from "./pages/Home/Home";
import Game from "./pages/Game/Game";
import Payment from "./pages/Payment/Payment";

function App() {
  useEffect(() => {
    async function setup() {
      const REDIRECT_URI = "http://localhost:3000";
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

      console.log(loginURL);
    }
    setup();
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
