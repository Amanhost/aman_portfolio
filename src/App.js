import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Blog from './component/Blog';
import Project from './Project';
import Nav from './component/Nav';
import ContactSection from './component/ContactSection';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav/>
      </div>
    </Router>
  );
};

export default App;
