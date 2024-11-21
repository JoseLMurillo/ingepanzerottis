const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

/*
const Manager = require('./manager');

Relacion con los productos. Un producto puedo estar en muchas compras, una compra solo puede ser de un producto
*/

const Purchase = sequelize.define('Purchase', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    date: {
        type: DataTypes.DATE
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
    }
}, {
    tableName: 'Purchase',
    timestamps: false
});

module.exports = Purchase;