// importing DataTypes from sequelize
const { DataTypes } = require("sequelize");

// requiring sequelize from the util database
const { sequelize } = require("../util/database");

module.exports = {
  // setting the properties of the post object
  Post: sequelize.define("post", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    privateStatus: DataTypes.BOOLEAN
  }),
};
