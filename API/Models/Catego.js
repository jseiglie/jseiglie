const Sequelize = require("sequelize");
const db = require("../config/database");
const Posts = require('./Posts')

const Catego = db.define("catego", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  cat: {
    type: Sequelize.STRING,
  },
});

Catego.sync()



module.exports = Catego