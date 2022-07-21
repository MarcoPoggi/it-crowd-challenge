const router = require("express").Router();

router.post("/authorization", (req, res) => {
  res.json({ message: "authorization route" });
});

module.exports = { auth: router };
