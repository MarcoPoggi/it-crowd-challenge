const { Brand } = require("../models/Brand");
const { Product } = require("../models/Product");

Brand.hasMany(Product, { foreignKey: "brand_name" });
Product.belongsTo(Brand, { foreignKey: "brand_name" });

module.exports = { models: { Brand, Product } };
