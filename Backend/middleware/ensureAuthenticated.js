const jwt = require("jsonwebtoken");
const User = require("../models/User"); 

const ensureAuthenticated = async (req, res, next) => {
  try {
    const token = req.header("Authorization");

    if (!token) {
      res.status(401).json({ message: "Access denied. No token provided." });
      return
    }

    const tokenValue = token.replace("Bearer ", "");

    const decoded = jwt.verify(tokenValue, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      res.status(401).json({ message: "User not found. Invalid token." });
      return
    }

    req.user = user;
    next(); 

  } catch (error) {
    res.status(401).json({ message: "Invalid or expired token." });
    return
  }
};

module.exports = ensureAuthenticated;
