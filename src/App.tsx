import React from "react";
import "./styles/main.css";
import Button from "./components/button";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <span className="the-number">0</span>
        <Button />
      </div>
    </div>
  );
};

export default App;
