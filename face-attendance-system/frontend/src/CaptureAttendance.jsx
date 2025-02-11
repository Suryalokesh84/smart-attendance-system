import React, { useState } from 'react';
import axios from 'axios';

const CaptureAttendance = () => {
  const [message, setMessage] = useState('');

  const handleCaptureAttendance = async () => {
    try {
      // Implement logic to call attendance.py here
      setMessage('Attendance marked successfully!');
    } catch (err) {
      setMessage('Error capturing attendance.');
    }
  };

  return (
    <div>
      <h2>Capture Attendance</h2>
      <button onClick={handleCaptureAttendance}>Capture Attendance</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CaptureAttendance;
