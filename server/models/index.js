const sequelize = require('../config/database');
/*
const Manager = require('./manager'); */

const Product = require('./product');
const Purchase = require('./purchase');
const Sale = require('./sale');
require('./associations');

// Importar el archivo de asociaciones para configurar las relaciones
//require('./associations');

module.exports = {
    Product,
    Purchase,
    Sale
};