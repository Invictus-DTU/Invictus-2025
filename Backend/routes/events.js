const express = require('express');
const { db } = require('../utils/db');

const events = express.Router()

events.get("/", async (req, res) => {
    const collection = db.collection('Info'); // Access the 'users' collection
    const info = await collection.find().toArray(); // Fetch all users

    res.json({ success: true, events: info })
})


module.exports = events