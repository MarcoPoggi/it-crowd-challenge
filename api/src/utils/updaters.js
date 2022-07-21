const { selectProductById } = require("./selectors");

//return one product updated
const updateProductById = async (id, { product = null, brand = null }) => {
  try {
    const productToUpdate = await selectProductById({ id, model: true });
    if (!productToUpdate) throw new Error("the product does not exist");

    !brand
      ? productToUpdate.set({ ...product })
      : productToUpdate.set({ ...product, brand });

    const productUpdated = await productToUpdate.save();

    return JSON.parse(JSON.stringify(productUpdated, null, 2));
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = { updateProductById };
