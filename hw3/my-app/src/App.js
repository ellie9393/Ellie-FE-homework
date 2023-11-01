import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Navbar from './navbar'
import Home from './home';
import Search from './search';
import Houses from './houses';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/search" element={<Search />} />
          <Route path="/houses" element={<Houses />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
