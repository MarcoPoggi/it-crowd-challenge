const { DataTypes } = require("sequelize");
const { database } = require("../database/database");

const Product = database.define(
  "products",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING(150),
      allowNull: false,
      set(value) {
        this.setDataValue("name", value.toLowerCase());
      },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      set(value) {
        this.setDataValue("description", value.toLowerCase());
      },
    },
    image_url: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  { timestamps: false, modelName: "product" }
);

module.exports = { Product };
