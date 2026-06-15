import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import { getCodespaceNotice } from './api.js';

const App: React.FC = () => {
  return (
    <Router>
      <div style={{ fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
        <h1>OctoFit Tracker</h1>
        <p>{getCodespaceNotice()}</p>
        <nav style={{ marginBottom: '1rem' }}>
          <Link to="/" style={{ marginRight: '1rem' }}>
            Home
          </Link>
          <Link to="/users" style={{ marginRight: '1rem' }}>
            Users
          </Link>
          <Link to="/teams" style={{ marginRight: '1rem' }}>
            Teams
          </Link>
          <Link to="/activities" style={{ marginRight: '1rem' }}>
            Activities
          </Link>
          <Link to="/workouts" style={{ marginRight: '1rem' }}>
            Workouts
          </Link>
          <Link to="/leaderboard">Leaderboard</Link>
        </nav>
        <Routes>
          <Route path="/" element={<div>Welcome to OctoFit Tracker.</div>} />
          <Route path="/users" element={<Users />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
