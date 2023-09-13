const { sequelize } = require("../../database");
const { DataTypes } = require("sequelize");

const NoteModel = sequelize.define("notes", {
  content: DataTypes.TEXT,
  author: DataTypes.STRING,
  image: DataTypes.STRING,
});

module.exports = { NoteModel };
