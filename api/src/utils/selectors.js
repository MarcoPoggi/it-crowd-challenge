const { Product, Brand } = require("../database/relations").models;

//return all products
const selectProducts = async () => {
  try {
    const products = await Product.findAll({ include: Brand });
    return JSON.parse(JSON.stringify(products, null, 2));
  } catch (e) {
    throw new Error(e.message);
  }
};

//return all brands
const selectBrands = async () => {
  try {
    const brands = await Brand.findAll();
    return JSON.parse(JSON.stringify(brands, null, 2));
  } catch (e) {
    throw new Error(e.message);
  }
};

//return one product by id
const selectProductById = async ({ id, model = false }) => {
  try {
    const product = await Product.findByPk(id, { include: Brand });
    return model ? product : JSON.parse(JSON.stringify(product, null, 2));
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = { selectProducts, selectProductById, selectBrands };
