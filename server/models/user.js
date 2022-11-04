// importing DataTypes from sequelize
const { DataTypes } = require("sequelize");

// requiring sequelize from the util database
const { sequelize } = require("../util/database");

module.exports = {
  // setting up the user and the user properties liek id username, and hashPass
  User: sequelize.define("user", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    username: DataTypes.STRING,
    hashedPass: DataTypes.STRING
  }),
};
