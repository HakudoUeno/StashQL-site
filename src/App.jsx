import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Docs from './Docs.jsx';
import Demo from './Demo.jsx';
import Team from './Team.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Docs' element={<Docs />} />
        <Route path='/Demo' element={<Demo />} />
        <Route path='/Team' element={<Team />} />
      </Routes>
    </Router>
  );
}

export default App;