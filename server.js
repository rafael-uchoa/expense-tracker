const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config({ path: './config/config.env' });
require('colors');

connectDB();
const app = express();
app.use(express.json());

// Routes
app.use('/api/v1/transactions', require('./routes/transactions'));

// Listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running on port ${PORT}`.yellow.bold));
