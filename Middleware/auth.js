// it is a function that has access to request and response objects to check if we have token in header

const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  // used next for enabling next call back function as this is middleware
  // Get token from header
  const token = req.header("x-auth-token");

  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, config.get("jwtSecret")); // used to verify token along with secret key

    req.user = decoded.user; // give payload so that we get user id
    next(); // pass control to next handler
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
