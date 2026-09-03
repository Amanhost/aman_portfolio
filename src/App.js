import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./component/Nav";
import AIAssistant from "./component/AIAssistant";
import ScrollProgress from "./component/ui/effects/ScrollProgress";
import ClickSpark from "./component/ui/effects/ClickSpark";
import "./style.css";

const Resume = lazy(() => import("./component/Resume/Resume"));
const WhatsAppButton = lazy(
  () => import("./component/ChatBoat/WhatsAppButton"),
);

const PageLoader = () => (
  <div className="min-h-screen bg-brand-bg flex items-center justify-center">
    <div className="flex gap-2">
      <span
        className="w-3 h-3 rounded-full bg-emerald-500 animate-bounce"
        style={{ animationDelay: "0ms" }}
      />
      <span
        className="w-3 h-3 rounded-full bg-teal-500 animate-bounce"
        style={{ animationDelay: "150ms" }}
      />
      <span
        className="w-3 h-3 rounded-full bg-cyan-500 animate-bounce"
        style={{ animationDelay: "300ms" }}
      />
    </div>
  </div>
);

const App = () => {
  return (
    <Router>
      <div className="App">
        <ScrollProgress />
        <ClickSpark />

        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Nav />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>

          <WhatsAppButton />
        </Suspense>

        <AIAssistant />
      </div>
    </Router>
  );
};

export default App;
