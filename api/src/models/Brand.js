const { DataTypes } = require("sequelize");
const { database } = require("../database/database");

const Brand = database.define(
  "brands",
  {
    name: {
      type: DataTypes.STRING(20),
      primaryKey: true,
      allowNull: false,
      unique: true,
      set(value) {
        this.setDataValue("name", value.toLowerCase());
      },
    },
    logo_url: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    modelName: "brand",
  }
);

module.exports = { Brand };
