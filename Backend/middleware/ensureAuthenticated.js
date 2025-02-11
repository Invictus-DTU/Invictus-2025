const jwt = require("jsonwebtoken");
const User = require("../models/User"); 

const ensureAuthenticated = async (req, res, next) => {
  try {
    
    const token = req.headers.authorization;
    console.log(token)

    if (!token) {
      res.status(401).json({ success: false, message: "Access denied. No token provided." });
      return
    }

    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded)

    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      res.status(401).json({ success: false, message: "User not found. Invalid token." });
      return
    }

    req.user = user;
    next(); 

  } catch (error) {
    res.status(401).json({ success: false, message: "Invalid or expired token." });
    return
  }
};

module.exports = ensureAuthenticated;
