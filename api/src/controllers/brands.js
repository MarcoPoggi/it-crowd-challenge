const router = require("express").Router();
const { selectors } = require("../database/queries");

router.get("/brands", async (req, res) => {
  try {
    const brands = await selectors.selectBrands();
    res.json({ message: "get brands", status: 200, data: brands });
  } catch (e) {
    res.status(400).json({ error: e.message, status: 400, data: null });
  }
});

module.exports = { brands: router };
