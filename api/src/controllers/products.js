const router = require("express").Router();
const {
  creators,
  selectors,
  updaters,
  deleters,
} = require("../database/queries");
const { verifyAuth } = require("../middlewares/auth");

router.get("/products", async (_req, res) => {
  try {
    const products = await selectors.selectProducts();
    res.json({ message: "get products", status: 200, data: products });
  } catch (e) {
    res.status(400).json({ error: e.message, status: 400, data: null });
  }
});

router.get("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await selectors.selectProductById({ id });
    res.json({ message: "get product", status: 200, data: product });
  } catch (e) {
    res.status(400).json({ error: e.message, status: 400, data: null });
  }
});

router.post("/products", verifyAuth, async (req, res) => {
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

router.put("/products", verifyAuth, async (req, res) => {
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

router.delete("/products", verifyAuth, async (req, res) => {
  try {
    const { id } = req.body;
    const deleted = await deleters.deleteProductById(id);
    res.json({ message: "product deleted", status: 200, data: deleted });
  } catch (e) {
    res.status(400).json({ error: e.message, status: 400, data: null });
  }
});

module.exports = { products: router };
