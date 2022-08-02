const Sequelize = require("sequelize");
const db = require('../config/database')
const Catego = require('./Catego')


const Posts = db.define("posts", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: Sequelize.STRING,
    },
    tech: {
        type: Sequelize.STRING,
    },
    category: {
        type: Sequelize.STRING,
    },
    youtube: {
        type: Sequelize.STRING,
    },
    description: {
        type: Sequelize.STRING,
    },
})

Posts.sync();



module.exports = Posts