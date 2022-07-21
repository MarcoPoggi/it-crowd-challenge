const {
  selectProducts,
  selectProductById,
  selectBrands,
} = require("../utils/selectors");
const { createProduct, createBrand } = require("../utils/creators");
const { updateProductById } = require("../utils/updaters");
const { deleteProductById } = require("../utils/deleters");

module.exports = {
  selectors: { selectProducts, selectProductById, selectBrands },
  creators: { createProduct, createBrand },
  updaters: { updateProductById },
  deleters: { deleteProductById },
};
