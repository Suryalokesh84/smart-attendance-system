const express = require('express');
const router = express.Router();
const fs = require('fs');

router.post('/', (req, res) => {
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

module.exports = router;
