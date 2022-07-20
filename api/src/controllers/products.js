const router = require("express").Router();
const { getProducts } = require("../database/queries");

router.get("/products", async (req, res) => {
  try {
    const products = await getProducts();
    res.json({ message: "get products", status: 200, products });
  } catch (e) {
    res.status(500).json({ error: e.message, status: 500, products: [] });
  }
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
