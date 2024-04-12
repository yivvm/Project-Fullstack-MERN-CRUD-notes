const jwt = require("jsonwebtoken");
const User = require("../models/user");

async function requireAuth(req, res, next) {
  try {
    // Read token off cookie
    const token = req.cookies.Authorization;

    // Decode the token
    const decoded = jwt.verify(token, process.env.SECRET);

    // Check expiration
    if (Date.now() > decoded.exp) return res.sendStatus(401);

    // Find user using decoded sub
    const user = await User.findById(decoded.sub);
    if (!user) return res.sendStatus(401);

    // Attach user to req
    req.user = user;

    // continue on
    console.log("in middleware");
    next();
  } catch (err) {
    return res.sendStatus(401);
  }
}

module.exports = requireAuth;
