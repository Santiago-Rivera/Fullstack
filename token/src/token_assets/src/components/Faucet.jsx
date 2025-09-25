import React, { useState } from "react";
import { canisterId, createActor } from "../../../declarations/token";
import { AuthClient } from "@dfinity/auth-client";

function Faucet(props) {

  const [isDisabled, setDisable] = useState(false);
  const [buttonText, setText] = useState("Gimme gimme");

  async function handleClick(event) {
    setDisable(true);
    setText("Processing...");

    // Simulate backend call
    await new Promise(resolve => setTimeout(resolve, 2000)); // 2 second delay
    
    // Mock success response
    setText("✅ Success! You received 10,000 DANG tokens!");
    
    // Re-enable after 5 seconds
    setTimeout(() => {
      setDisable(false);
      setText("Gimme gimme");
    }, 5000);
  }

  return (
    <div className="blue window">
      <h2>
        <span role="img" aria-label="tap emoji">
          🚰
        </span>
        Faucet
      </h2>
      <label>Get your free DAngela tokens here! Claim 10,000 DANG tokens to {props.userPrincipal}.</label>
      <p className="trade-buttons">
        <button 
        id="btn-payout" 
        onClick={handleClick}
        disabled={isDisabled}
        >
          {buttonText}
        </button>
      </p>
    </div>
  );
}

export default Faucet;
