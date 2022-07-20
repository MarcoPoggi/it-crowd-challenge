const { Op } = require("sequelize");
const { Product, Brand } = require("./relations").models;

module.exports = {
  //all products
  getProducts: async () => {
    try {
      const products = await Product.findAll({ include: Brand });
      return JSON.parse(JSON.stringify(products, null, 2));
    } catch (e) {
      throw new Error("error finding products");
    }
  },
  //one product by id
  getProductById: async ({ id, model = false }) => {
    try {
      const product = await Product.findByPk(id, { include: Brand });
      return model ? product : JSON.parse(JSON.stringify(product, null, 2));
    } catch (e) {
      throw new Error("error when searching for the product");
    }
  },
  //one or more products by some attribute(field)
  getProductsBy: async ({ attr = "name", value, model = false }) => {
    try {
      const products = await Product.findAll({
        where: {
          [attr]: { [Op.like]: value },
        },
      });

      return model ? products : JSON.parse(JSON.stringify(products, null, 2));
    } catch (e) {
      throw new Error("error searching for the product(s)");
    }
  },
  //create & return a product
  createProduct: async (product, brand) => {
    try {
      const data = { ...product, brand };
      const newProduct = await Product.create(
        { product: data },
        { include: [Brand] }
      );

      if (!newProduct) throw Error;
      return JSON.parse(JSON.stringify(newProduct, null, 2));
    } catch (e) {
      throw new Error("error creating product");
    }
  },
};
