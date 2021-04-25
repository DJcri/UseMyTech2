const { JWT_SECRET } = require("../secrets/index");
const jwt = require("jsonwebtoken");

const restricted = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return next({ status: 401, message: "token required" });
  }
  jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
    if (err) {
      next({ status: 401, message: "token invalid" });
    } else {
      req.decodedToken = decodedToken;
      next();
    }
  });
};

const checkRoleRenter = (req, res, next) => {
  if (!req.decodedToken) {
    res.json("token required from restricted middleware");
  } else {
    if (req.decodedToken.role === "renter") {
      next();
    } else {
      res.status(403).json("Renters only");
    }
  }
};

const checkRoleOwner = (req, res, next) => {
  if (!req.decodedToken) {
    res.json("token required from restricted middleware");
  } else {
    if (req.decodedToken.role === "owner") {
      next();
    } else {
      res.status(403).json("Owners only");
    }
  }
};

module.exports = {
  checkRoleRenter,
  checkRoleOwner,
  restricted,
};
