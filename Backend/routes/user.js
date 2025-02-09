const express = require('express');
const ensureAuthenticated = require('../middleware/ensureAuthenticated');

const user = express.Router()

user.get("/", ensureAuthenticated, async (req, res) => {
    res.json(req.user)
})


module.exports = user