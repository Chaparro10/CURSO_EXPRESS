const { DataTypes } = require("sequelize");
const { bdMysl } = require("../database");

const modelDetailProduct = bdMysl.define(
  "DETALLE_PRODUCTOS",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idProveedor: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idEstatus: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      idProducto: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    count: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    price: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      logo: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      Unidad: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
  },
  {
    timestamps: true,
    tableName: "DETALLE_PRODUCTOS",
  }
);

module.exports = modelDetailProduct;
