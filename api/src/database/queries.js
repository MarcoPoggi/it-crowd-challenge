const {
  selectProducts,
  selectProductById,
  selectBrands,
} = require("../utils/selectors");
const { createProduct, createBrand } = require("../utils/creators");
const { updateProductById } = require("../utils/updaters");

module.exports = {
  selectors: { selectProducts, selectProductById, selectBrands },
  creators: { createProduct, createBrand },
  updaters: { updateProductById },
};
