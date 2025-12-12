const connectDB = require('./config/db');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');

// Load env variables
dotenv.config();
connectDB();


const app = express();

// ✅ Correct path (./ not ../)
const authRoutes = require('./routes/authRoutes');

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// ✅ Correct variable name
app.use('/api/auth', authRoutes);

// Test Route
app.get('/', (req, res) => {
  res.send('✅ Backend Day 1 complete and running!');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
