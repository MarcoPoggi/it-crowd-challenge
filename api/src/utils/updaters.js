const { Product } = require("../database/relations").models;
const { createBrand } = require("./creators");

//return one product updated
const updateProductById = async (id, { product = null, brand = null }) => {
  try {
    const productToUpdate = await Product.findByPk(id);
    if (!productToUpdate) throw new Error("the product does not exist");
    const newBrand =
      brand !== null
        ? await createBrand({ brand, model: true, returnExistent: true })
        : null;

    if (!newBrand) productToUpdate.set({ ...product });
    else {
      productToUpdate.set({ ...product });
      await productToUpdate.setBrand(newBrand);
    }

    const productUpdated = await productToUpdate.save();

    return JSON.parse(JSON.stringify(productUpdated, null, 2));
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = { updateProductById };
