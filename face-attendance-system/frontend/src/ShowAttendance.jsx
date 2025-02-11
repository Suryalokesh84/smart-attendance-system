import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ShowAttendance = () => {
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const fetchAttendanceRecords = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/attendance-records', { params: { startDate, endDate } });
      setAttendanceRecords(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchAttendanceRecords();
  }, [startDate, endDate]);

  return (
    <div>
      <h2>Show Attendance Records</h2>
      <div>
        <label>
          Start Date:
          <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        </label>
        <label>
          End Date:
          <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        </label>
        <button onClick={fetchAttendanceRecords}>Filter</button>
      </div>
      <ul>
        {attendanceRecords.map(record => (
          <li key={record.rollNumber}>
            {record.name} ({record.rollNumber}) - {record.status} at {record.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowAttendance;
