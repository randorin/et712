import React from "react";
import './index.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="header-container">
        <h1>Anime Main Characters</h1>
      </div>
      <nav className="nav">
        <Link to="/" className="link">Home</Link>
        <Link to="/angelbeats" className="link">Angel Beats!</Link>
        <Link to="/inuyasha" className="link">Inuyasha</Link>
        <Link to="/naruto" className="link">Naruto</Link>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/angelbeats" element={<Card title="Angel Beats!" description="Angel Beats!" />} />
          <Route path="/inuyasha" element={<Card title="Inuyasha" description="Inuyasha" />} />
          <Route path="/naruto" element={<Card title="Naruto" description="Naruto" />} />
          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="card-container">
      <CardLink to="/angelbeats" title="Angel Beats!" description="Explore the characters of Angel Beats!" />
      <CardLink to="/inuyasha" title="Inuyasha" description="Explore the characters of Inuyasha!" />
      <CardLink to="/naruto" title="Naruto" description="Explore the characters of Naruto!" />
    </div>
  );
}

function CardLink({ to, title, description }) {
  return (
    <Link to={to} className="card-link">
      <div className="card">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </Link>
  );
}

function Card({ title, description }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default App;
