const { Product } = require("../database/relations").models;

//return one product updated
const deleteProductById = async (id) => {
  try {
    const productToDelete = await Product.findByPk(id);
    if (!productToDelete)
      throw new Error("the product to delete was not found");

    let deleted = JSON.parse(JSON.stringify(productToDelete, null, 2));
    await productToDelete.destroy();
    return deleted;
  } catch (e) {}
};

module.exports = { deleteProductById };
