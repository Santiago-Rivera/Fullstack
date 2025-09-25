import React, { useState } from "react";
import { Principal } from '@dfinity/principal';
import { canisterId, createActor } from "../../../declarations/token";
import { AuthClient } from "@dfinity/auth-client";

function Transfer() {

  const [recipientId, setId] = useState("");
  const [amount, setAmount] = useState("");
  const [isHidden, setHidden] = useState(true);
  const [feedback, setFeedback] = useState("");
  const [isDisabled, setDisable] = useState(false);
  
  async function handleClick() {
    setHidden(true);
    setDisable(true);
    
    console.log("Transferring", amount, "tokens to", recipientId);
    
    // Simulate backend call
    await new Promise(resolve => setTimeout(resolve, 2000)); // 2 second delay
    
    // Mock response
    const success = Math.random() > 0.2; // 80% success rate
    if (success) {
      setFeedback(`✅ Successfully transferred ${amount} DANG tokens!`);
    } else {
      setFeedback(`❌ Transfer failed. Please try again.`);
    }
    
    setHidden(false);
    setDisable(false);
  }

  return (
    <div className="window white">
      <div className="transfer">
        <fieldset>
          <legend>To Account:</legend>
          <ul>
            <li>
              <input
                type="text"
                id="transfer-to-id"
                value={recipientId}
                onChange={(e) => setId(e.target.value)}
              />
            </li>
          </ul>
        </fieldset>
        <fieldset>
          <legend>Amount:</legend>
          <ul>
            <li>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </li>
          </ul>
        </fieldset>
        <p className="trade-buttons">
          <button 
          id="btn-transfer" 
          onClick={handleClick} 
          disabled={isDisabled}
          >
            Transfer
          </button>
        </p>
        <p hidden={isHidden}>{feedback}</p>
      </div>
    </div>
  );
}

export default Transfer;
