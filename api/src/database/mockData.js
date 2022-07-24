const { createProduct } = require("../utils/creators");
const mock = require("./mock.json");

const mockDatabase = () =>
  mock.forEach(async ({ product, brand }) => {
    try {
      await createProduct({product,brand})
      console.log("✅ Mock product created");
    } catch (e) {
      console.log("❌ Mock product fail",e);
    }
  });

module.exports = { mockDatabase };
