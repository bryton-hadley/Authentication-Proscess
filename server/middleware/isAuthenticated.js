require("dotenv").config();
// importing the jsonwebtoken and setting it equal to a veriable
const jwt = require("jsonwebtoken");
const { SECRET } = process.env;

// creating module to Authenticate the paths
module.exports = {
  //accessing the authentication token from the request headers that should be sent along with each request
  isAuthenticated: (req, res, next) => {
    const headerToken = req.get("Authorization");
    // checking if  users dont have an account and then sending back an error immediatelyif they don't
    if (!headerToken) {
      console.log("ERROR IN auth middleware");
      res.sendStatus(401);
    }
    // creating a variable to hold our verified token
    let token;
    // using the jwwt libary along with our secret to verify the user's token. if that doesn't work the error in the catch below will tigger
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
    //next with move the request along to the appropiate handler function in the appropiate controller
    next();
  },
};
