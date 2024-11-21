const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

/*
const Manager = require('./manager');

Relacion con los productos. Un producto puedo estar en muchas compras, una compra solo puede ser de un producto
*/

const Sale = sequelize.define('Sale', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    notes: {
        type: DataTypes.STRING(255)
    },
    date: {
        type: DataTypes.DATE
    },
}, {
    tableName: 'Sale',
    timestamps: false
});

module.exports = Sale;