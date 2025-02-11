import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Register from './Register';
import CaptureAttendance from './CaptureAttendance';
import ShowAttendance from './ShowAttendance';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/capture-attendance" element={<CaptureAttendance />} />
      <Route path="/show-attendance" element={<ShowAttendance />} />
    </Routes>
  </Router>
);

export default App;
