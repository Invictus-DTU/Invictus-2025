const express = require('express');
const User = require('../models/User');
const ensureAuthenticated = require("../middleware/ensureAuthenticated")

const workshop = express.Router()

workshop.post("/register/:workshopId", ensureAuthenticated, async (req, res) => {
    let workshopId = parseInt(req.params.workshopId);

    if (isNaN(workshopId)) {
        res.status(400).json({ success: false, message: "Invalid workshop ID format" });
        return
    }

    if (![1, 2, 3, 4, 5].includes(workshopId)) {
        res.json({ success: false, message: "Invalid workshop ID" })
        return
    }

    try {
        const user = await User.findByIdAndUpdate(
            req.user._id,
            { $addToSet: { workshop: workshopId } },
            { new: true }
        ).select("-password");
        
        if (!user) {
            res.status(404).json({ success: false, message: "User not found" });
            return
        }

        res.status(200).json({ success: true, message: "Successfully registered for workshop!!", user })
        return
    } catch (error) {
        res.status(500).json({ success: false, message: "An error occurred!" })
        return
    }
})


module.exports = workshop