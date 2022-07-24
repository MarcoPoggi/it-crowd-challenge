const { verifyAuth } = require("../middlewares/auth");
const router = require("express").Router();
const jwt = require("jsonwebtoken");
const { ADMIN, ADMIN_PASS, SECRET } = process.env;

router.post("/authorization", async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password)
      throw new Error("missing credentials(username or password)");
    //simple validation
    if (username !== ADMIN || password !== ADMIN_PASS)
      throw new Error("invalid credentials");

    const token = jwt.sign({ data: { username } }, SECRET, {
      algorithm: "HS256",
      expiresIn: "1h",
    });

    res.json({ message: "token sign", status: 200, token });
  } catch (e) {
    res.status(400).json({ error: e.message, status: 400, token: null });
  }
});

router.post("/authorization/confirm", verifyAuth, async (req, res) => {
  try {
    if (!req.body.authorized) throw new Error("invalid token");
    res.json({ message: "valid token", status: 200, authorized: true });
  } catch (e) {
    res.status(500).json({ error: e.message, status: 500 });
  }
});

module.exports = { auth: router };
