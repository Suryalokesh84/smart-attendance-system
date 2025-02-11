import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isTraining, setIsTraining] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const handleTrain = async () => {
    setIsTraining(true);
    try {
      const res = await axios.post('http://localhost:3000/api/train', { rollNumber });
      setIsTraining(false);
      setIsRegistered(true);
      setMessage(res.data.msg);
    } catch (err) {
      setIsTraining(false);
      setMessage('Error during training.');
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/api/register', { name, rollNumber, email });
      setMessage(res.data.msg);
    } catch (err) {
      setMessage('Error registering user.');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
        <input type="text" value={rollNumber} onChange={(e) => setRollNumber(e.target.value)} placeholder="Roll Number" required />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <button type="button" onClick={handleTrain} disabled={!name || !rollNumber || !email || isTraining || isRegistered}>Train</button>
        <button type="submit" disabled={!isRegistered}>Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Register;
