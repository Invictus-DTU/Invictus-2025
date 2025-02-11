const express = require('express');
const ensureAuthenticated = require('../middleware/ensureAuthenticated');

const user = express.Router()

user.get("/", ensureAuthenticated, async (req, res) => {
    res.json({ success: true, user: req.user })
})


module.exports = user