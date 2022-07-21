const { Product, Brand } = require("../database/relations").models;

//return all products
const selectProducts = async (page = null, amount = false) => {
  try {
    if (amount === "all") return await Product.count();

    let products = null;
    (typeof Number(page) === "number") & (page >= 0)
      ? (products = await Product.findAll({ offset: page * 10, limit: 10 }))
      : (products = await Product.findAll({ include: Brand }));

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
    if (!product) throw new Error("product not found");
    return model ? product : JSON.parse(JSON.stringify(product, null, 2));
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = { selectProducts, selectProductById, selectBrands };
