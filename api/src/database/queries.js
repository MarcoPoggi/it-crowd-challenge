const {
  selectProducts,
  selectProductById,
  selectBrands,
} = require("../utils/selectors");
const { createProduct, createBrand } = require("../utils/creators");

module.exports = {
  selectors: { selectProducts, selectProductById, selectBrands },
  creators: { createProduct, createBrand },
};
