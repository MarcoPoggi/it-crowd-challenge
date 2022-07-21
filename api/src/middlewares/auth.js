const jwt = require("jsonwebtoken");
const { SECRET } = process.env;

async function verifyAuth(req, res, next) {
  try {
    const Auth = req.header("Authorization");
    if (!Auth) throw new Error("authorization token required");

    const token = Auth.split(" ")[1];

    jwt.verify(token, SECRET, (err, _decoded) => {
      if (err) throw new Error("invalid token");
      next();
    });
  } catch (e) {
    res.status(400).json({ error: e.message, status: 400, token: null });
  }
}

module.exports = { verifyAuth };
