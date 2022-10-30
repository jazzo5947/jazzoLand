import React from "react";
import "./App.css";
import OnBid from "./getInfo/onbid";
import Register from "./register";
import SelectPage from "./select-page";

function App() {
  return (
    <div className="App">
      <OnBid />
      <SelectPage />
    </div>
  );
}

export default App;
