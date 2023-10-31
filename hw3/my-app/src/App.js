import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './home';
import Search from './search';
import Houses from './houses';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/houses">Houses</Link>
            </li>
          </ul>
        </nav>

        <Route>
          <Route path="search" element={<Search />} />
          <Route path="houses" element={<Houses />} />
          <Route path="/" element={<Home />} />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
