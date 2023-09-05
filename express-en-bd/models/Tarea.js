const { sequelize } = require('../database')
const { DataTypes } = require('sequelize')

const TareasModel = sequelize.define('tareas', {
    titulo: {
        type: DataTypes.STRING,
        required: true
    },
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    timestamps: true
})

module.exports = { TareasModel }