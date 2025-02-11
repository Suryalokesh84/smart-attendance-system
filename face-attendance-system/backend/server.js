const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors'); // Import cors
const fs = require('fs'); // Import file system operations
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()); // Use cors

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Register route
app.post('/api/register', (req, res) => {
  const { name, rollNumber, email, encoding } = req.body;
  const user_details = { name, rollNumber, email, encoding: encoding || [] };

  const userDataFile = `user_data/${rollNumber}.json`;
  fs.writeFile(userDataFile, JSON.stringify(user_details), (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ msg: 'Server Error' });
    }
    res.json({ msg: 'User registered successfully!' });
  });
});

// Attendance route
app.post('/api/train', (req, res) => {
  const { rollNumber } = req.body;

  const trainProcess = spawn('python', ['train.py', rollNumber]);

  trainProcess.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  trainProcess.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  trainProcess.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
    res.json({ msg: 'Training completed successfully!' });
  });
});

// Fetch attendance records
app.get('/api/attendance-records', (req, res) => {
  const { startDate, endDate } = req.query;
  const records = [];

  fs.readdir('attendance_records', (err, files) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ msg: 'Server Error' });
    }

    files.forEach((file) => {
      const filePath = `attendance_records/${file}`;
      const record = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      if (record.date >= startDate && record.date <= endDate) {
        records.push(record);
      }
    });

    res.json(records);
  });
});

// Serve React frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../frontend/dist/index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
