
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="container py-4">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4 rounded">
  <a className="navbar-brand" href="/">
          <img src={logo} alt="OctoFit" width="40" height="40" className="d-inline-block align-top me-2" />
          OctoFit Tracker
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link active" href="/">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="/activities">Activities</a></li>
            <li className="nav-item"><a className="nav-link" href="/teams">Teams</a></li>
            <li className="nav-item"><a className="nav-link" href="/leaderboard">Leaderboard</a></li>
          </ul>
        </div>
      </nav>

      {/* Heading */}
      <h1 className="display-4 text-center mb-4">Welcome to OctoFit Tracker</h1>

      {/* Card Example */}
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

      {/* Table Example */}
      <div className="row mb-4">
        <div className="col-md-10 mx-auto">
          <h2 className="h4 mb-3">Recent Activities</h2>
          <table className="table table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>User</th>
                <th>Activity</th>
                <th>Duration (min)</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Ironman</td>
                <td>Run</td>
                <td>30</td>
                <td><button className="btn btn-sm btn-info">View</button></td>
              </tr>
              <tr>
                <td>2</td>
                <td>Batman</td>
                <td>Cycle</td>
                <td>45</td>
                <td><button className="btn btn-sm btn-info">View</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Form Example */}
      <div className="row mb-4">
        <div className="col-md-8 mx-auto">
          <h2 className="h4 mb-3">Add Activity</h2>
          <form className="row g-3">
            <div className="col-md-6">
              <label htmlFor="user" className="form-label">User</label>
              <input type="text" className="form-control" id="user" placeholder="Enter user name" />
            </div>
            <div className="col-md-4">
              <label htmlFor="activity" className="form-label">Activity</label>
              <select className="form-select" id="activity">
                <option>Run</option>
                <option>Cycle</option>
                <option>Swim</option>
              </select>
            </div>
            <div className="col-md-2">
              <label htmlFor="duration" className="form-label">Duration</label>
              <input type="number" className="form-control" id="duration" placeholder="min" />
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-success">Add Activity</button>
            </div>
          </form>
        </div>
      </div>

      {/* Modal Example */}
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
  );
}

export default App;
