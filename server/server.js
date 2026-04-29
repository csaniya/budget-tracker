const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
// Middleware
app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/budgetDB')
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

// Routes
app.use('/api/transactions', require('./routes/transactionRoutes'));

app.listen(5000, () => console.log("Server running on port 5000"));