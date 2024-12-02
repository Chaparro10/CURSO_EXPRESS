const { DataTypes } = require("sequelize");
const { bdMysl } = require("../database");

const modelProduct = bdMysl.define(
  "PRODUCTOS",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
  },
  {
    timestamps: true,
    tableName: "PRODUCTOS",
  }
);

module.exports = modelProduct;
