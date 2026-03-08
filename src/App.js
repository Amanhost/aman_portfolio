import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./component/Nav";
import Resume from "./component/Resume/Resume";
import WhatsAppButton from "./component/ChatBoat/WhatsAppButton";
import "./style.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Nav />} />

          {/* Resume Page */}
          <Route path="/resume" element={<Resume />} />
        </Routes>

        <WhatsAppButton />
      </div>
    </Router>
  );
};

export default App;
