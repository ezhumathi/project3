
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search"; 
import Apply from "./pages/Apply";
import "./App.css";

function App() {
  return (
    <Router>
      <nav className="navbar">
        <h1>Scholarship Finder</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/search">Search</Link> 
          <Link to="/apply">Apply</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} /> 
        <Route path="/apply" element={<Apply />} />
      </Routes>
    </Router>
  );
}

export default App;
