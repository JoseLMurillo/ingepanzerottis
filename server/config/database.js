const { Sequelize } = require('sequelize');
require('dotenv').config();

/* const database = new Sequelize('panzerotti', 'root', '4444', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

module.exports = database; */

const database = new Sequelize(
    process.env.DB_NAME,      // Nombre de la base de datos
    process.env.DB_USER,      // Usuario
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        logging: false
    });

module.exports = database;