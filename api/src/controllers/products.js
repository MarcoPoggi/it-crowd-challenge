const router = require("express").Router();
const {
  creators,
  selectors,
  updaters,
  deleters,
} = require("../database/queries");

router.get("/products", async (req, res) => {
  try {
    const { id } = req.query;
    const products = !id
      ? await selectors.selectProducts()
      : await selectors.selectProductById({ id });
    res.json({ message: "get product(s)", status: 200, data: products });
  } catch (e) {
    res.status(400).json({ error: e.message, status: 400, data: null });
  }
});

router.post("/products", async (req, res) => {
  try {
    const { product, brand } = req.body;
    const createdProduct = await creators.createProduct({ product, brand });
    res
      .status(201)
      .json({ message: "product created", status: 201, data: createdProduct });
  } catch (e) {
    res.status(400).json({ error: e.message, status: 400, data: null });
  }
});

router.put("/products", async (req, res) => {
  try {
    const { id, dataProduct, dataBrand } = req.body;
    const updatedProduct = await updaters.updateProductById(id, {
      product: dataProduct,
      brand: dataBrand,
    });
    res.json({ message: "product updated", status: 200, data: updatedProduct });
  } catch (e) {
    res.status(400).json({ error: e.message, status: 400, data: null });
  }
});

router.delete("/products", async (req, res) => {
  try {
    const { id } = req.body;
    const deleted = await deleters.deleteProductById(id);
    res.json({ message: "product deleted", status: 200, data: deleted });
  } catch (e) {
    res.status(400).json({ error: e.message, status: 400, data: null });
  }
});

module.exports = { products: router };
