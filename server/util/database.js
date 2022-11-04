require("dotenv").config();

// importing the connection string
const { CONNECTION_STRING } = process.env;

//creating  a variable for sequelize class and passing the database connection string and config object through and then calling sequelize
const Sequelize = require("sequelize");

// setting up the configuration object what holds the calue of postgres and dialectOptions
const sequelize = new Sequelize(CONNECTION_STRING, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false
    },
  },
});

module.exports = {
  sequelize
};
