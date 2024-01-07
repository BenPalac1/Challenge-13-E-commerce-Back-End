const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER, // set datatype to INT
      allowNull: false, // this value cannot be null
      primaryKey: true, // set primary key
      autoIncrement: true, 
    },

    category_name: {
      type: DataTypes.STRING,
    },
  },
  
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;