import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Nav from "./component/Nav";
import "./style.css";
import WhatsAppButton from "./component/ChatBoat/WhatsAppButton";
console.log();
const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <WhatsAppButton />
      </div>
    </Router>
  );
};

export default App;
