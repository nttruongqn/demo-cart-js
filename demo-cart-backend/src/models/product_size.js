"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product_Size extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product_Size.belongsTo(models.Product, {
        foreignKey: "product_id",
        targetKey: "id",
        as: "sizeData",
      });
    }
  }
  Product_Size.init(
    {
      size: DataTypes.STRING,
      product_id: DataTypes.INTEGER,
      valueVi: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Product_Size",
    }
  );
  return Product_Size;
};
