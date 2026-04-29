const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    title: String,
    amount: Number,
    type: String,
    category: String,
    date: String
});

module.exports = mongoose.model('Transaction', TransactionSchema);