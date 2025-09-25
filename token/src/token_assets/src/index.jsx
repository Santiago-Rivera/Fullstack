import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

console.log("🔥 DFaucet starting...");

// Simple React render
ReactDOM.render(
  <App loggedInPrincipal="development-user-123" />, 
  document.getElementById("root")
);

console.log("✅ DFaucet rendered!");

init();
