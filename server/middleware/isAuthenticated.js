require("dotenv").config();
// importing the jsonwebtoken and setting it equal to a veriable
const jwt = require("jsonwebtoken");
const { SECRET } = process.env;

// creating module to Authenticate the paths
module.exports = {
  //writing a fuction to check and see if the user is logged in or authorized
  isAuthenticated: (req, res, next) => {
    const headerToken = req.get("Authorization");
    // checking if dont have an account and then sending back an error
    if (!headerToken) {
      console.log("ERROR IN auth middleware");
      res.sendStatus(401);
    }
    // setting the token variable
    let token;
    // taking the token and varifing it and checking to see if ture or flase
    try {
      token = jwt.verify(headerToken, SECRET);
    } catch (err) {
      err.statusCode = 500;
      throw err;
    }

    if (!token) {
      const error = new Error("Not authenticated.");
      error.statusCode = 401;
      throw error;
    }

    next();
  },
};
