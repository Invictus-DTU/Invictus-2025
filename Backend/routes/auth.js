const express = require('express');
const User = require('../models/User');
const { hashPassword, comparePassword } = require("../utils/hash")
const { generateToken } = require("../utils/token")
const auth = express.Router()


auth.post("/register", async (req, res) => {
    const { name, email, college, password } = req.body;
    

    if (!name || !email || !college || !password) {
        res.status(400).json({ success: false, message: "All fields are required" });
        return;
    }

    try {
        const findUser = await User.findOne({ email })

        if (findUser) {
            res.json({ success: false, message: "User with this email already exists" })
            return
        }
        const hashedPassword = await hashPassword(password);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            college
        });

        await newUser.save();
        const token = generateToken(newUser._id.toString());

        res.cookie('auth_token',token, { maxAge: 5961600000 })
        res.status(201).json({ success: true, message: "Loggedin sucessfully", token });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
});

auth.post("/login", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(500).json({ message: "Enter a valid email or password" });
        return
    } else {
        try {
            const user = await User.findOne({ email });
            if (!user) {
                res.status(400).json({ success: false, message: "User with this email doesn't exists" });
                return;
            }
            const isPasswordValid = await comparePassword(
                password,
                user.password
            );
            if (!isPasswordValid) {
                res.status(400).json({ success: false, message: "Invalid email or password" });
                return;
            }

            const token = generateToken(user._id.toString());

            res.cookie('auth_token',token, { maxAge: 5961600000 })
            res.status(200).json({ success: true, message: "Loggedin successfully", token });
            return
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }
});



module.exports = auth