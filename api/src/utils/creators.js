const { Brand, Product } = require("../database/relations").models;
const { selectProductById } = require("./selectors");

//create & return a product
const createProduct = async ({ product, brand, model = false }) => {
  try {
    if (!brand) throw new Error("a product cannot be created without a brand");

    let brandToAssociate = await Brand.findByPk(brand.name);
    if (!brandToAssociate)
      brandToAssociate = await createBrand({ brand, model: true });

    const newProduct = await Product.create({ ...product });
    if (!newProduct) throw new Error("product could not be created");

    await brandToAssociate.addProduct(newProduct);

    const response = model
      ? await selectProductById({ id: newProduct.id, model: true })
      : await selectProductById({ id: newProduct.id });

    return response;
  } catch (e) {
    throw new Error(e.message);
  }
};

const createBrand = async ({
  brand,
  model = false,
  returnExistent = false,
}) => {
  try {
    const [brandCreateOrFound, created] = await Brand.findOrCreate({
      where: { name: brand.name },
      defaults: { ...brand },
    });

    if (!created && !returnExistent)
      throw new Error("this brand already exists, create another");

    return model
      ? brandCreateOrFound
      : JSON.parse(JSON.stringify(brandCreateOrFound, null, 2));
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = { createProduct, createBrand };
