const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('ejs', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {sequelize}