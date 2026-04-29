const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');

// GET all
router.get('/', async (req, res) => {
    const data = await Transaction.find();
    res.json(data);
});

// POST
router.post('/', async (req, res) => {
    const newTransaction = new Transaction(req.body);
    const saved = await newTransaction.save();
    res.json(saved);
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Transaction.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;