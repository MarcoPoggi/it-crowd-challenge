const router = require("express").Router();

router.get("/products", (req, res) => {
  res.json({ message: "get products" });
});

router.post("/products", (req, res) => {
  res.json({ message: "post products" });
});

router.put("/products", (req, res) => {
  res.json({ message: "put products" });
});

router.delete("/products", (req, res) => {
  res.json({ message: "delete products" });
});

module.exports = { products: router };
