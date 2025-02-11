import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Face Recognition Attendance System</h1>
    <div>
      <Link to="/register">
        <button>Register</button>
      </Link>
      <Link to="/capture-attendance">
        <button>Capture Attendance</button>
      </Link>
      <Link to="/show-attendance">
        <button>Show Attendance Records</button>
      </Link>
    </div>
  </div>
);

export default Home;
