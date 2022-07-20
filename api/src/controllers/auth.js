const router = require("express").Router();

router.post("/", (req, res) => {
  res.json({ message: "auth route" });
});

module.exports = { auth: router };
