const express = require('express');
const cors = require('cors');

const app = express();

// فعال‌سازی CORS
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(express.json());

app.post('/api/login', (req, res) => {
  console.log('Login request body:', req.body);

  const { email, password } = req.body;

  if (email === 'admin@example.com' && password === '123456') {
    res.json({ token: 'fake-jwt-token' });
  } else {
    console.log('Invalid login attempt');
    res.status(401).json({ message: 'Invalid email or password' });
  }
});

app.listen(3000, () => {
  console.log('✅ Server running on http://localhost:3000');
});