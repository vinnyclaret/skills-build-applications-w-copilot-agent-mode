

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import octofitLogo from '../public/octofitapp-small.svg';
import './App.css';
import Activities from './components/Activities';
import Teams from './components/Teams';
import Leaderboard from './components/Leaderboard';
import Users from './components/Users';
import Workouts from './components/Workouts';

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <Router>
      <div className="container py-4">
        {/* Navigation */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4 rounded">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img src={octofitLogo} alt="OctoFit" className="octofitapp-logo" />
            <span className="ms-2">OctoFit Tracker</span>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link className="nav-link" to="/activities">Activities</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/teams">Teams</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/leaderboard">Leaderboard</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/users">Users</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/workouts">Workouts</Link></li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/" element={
            <div>
              <h1 className="display-4 text-center mb-4">Welcome to OctoFit Tracker</h1>
              <div className="row mb-4">
                <div className="col-md-6 mx-auto">
                  <div className="card shadow">
                    <div className="card-body">
                      <h5 className="card-title">Track Your Fitness</h5>
                      <p className="card-text">Log activities, join teams, and climb the leaderboard!</p>
                      <button className="btn btn-primary" onClick={() => setShowModal(true)}>Show Modal</button>
                    </div>
                  </div>
                </div>
              </div>
              {showModal && (
                <div className="modal show fade d-block" tabIndex="-1" role="dialog">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">Welcome to OctoFit!</h5>
                        <button type="button" className="btn-close" aria-label="Close" onClick={() => setShowModal(false)}></button>
                      </div>
                      <div className="modal-body">
                        <p>This is a Bootstrap modal example. You can use modals for confirmations, forms, and more.</p>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
