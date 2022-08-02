const Sequelize = require("sequelize");

module.exports = new Sequelize('seiglie', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    operatorAliases: false,
}) 

