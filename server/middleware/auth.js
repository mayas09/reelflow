const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "توكن غير موجود" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // يحتوي على { id, role }
    next();
  } catch {
    return res.status(403).json({ error: "توكن غير صالح" });
  }
}

module.exports = verifyToken;
