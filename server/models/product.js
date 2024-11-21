const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

/*
const Manager = require('./manager');*/

const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  /* price: {
    type: DataTypes.FLOAT,
    allowNull: false
  }, */
  notes: {
    type: DataTypes.STRING(255)
  }
},{
  tableName: 'Product',
  timestamps: false
});

module.exports = Product;