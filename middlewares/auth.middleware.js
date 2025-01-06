const jwt = require("jsonwebtoken");
const JWT_SECRET = "skillminds-academy-devs";

const authMiddleware = (req, res, next) => {
  const token = req.headers.token;

  if (token) {
    const data = jwt.verify(token, JWT_SECRET);
    req.userId = data.userId;
    next();
  } else {
    return res.status(403).json({ message: "Invalid Credentials!" });
  }
};

module.exports = authMiddleware;
