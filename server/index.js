// IMPORTING
require("dotenv").config();

const express = require("express");
const cors = require("cors");

const { sequelize } = require("./util/database");
const { User } = require('./models/user');
const { Post } = require("./models/post");
const { SERVER_PORT } = process.env;
const { register, login } = require("./controllers/auth");
const { isAuthenticated } = require("./middleware/isAuthenticated");
const {
  getAllPosts,
  getCurrentUserPosts,
  addPost,
  editPost,
  deletePost,
} = require("./controllers/posts");

const app = express();

// top level middle ware
app.use(express.json());
app.use(cors());

// settingt the relationship for User & post
User.hasMany(Post);
Post.belongsTo(User);

// connecting middle ware to the login and register function
app.post("/register", register);
app.post("/login", login);

// grabbing all the post using get
app.get("/posts", getAllPosts);

//grabbing and adding authentication to the users path through middleware
app.get("/userposts/:userId", getCurrentUserPosts);
app.get("/posts", isAuthenticated, addPost);
app.get("posts/:id", isAuthenticated, editPost);
app.delete("/posts/:id", isAuthenticated, deletePost);

// settting the app to listen on the port i set in the .env file
sequelize
  .sync()
  .then(() => {
    app.listen(SERVER_PORT, () =>
      console.log(`db sync successful & server running on port ${SERVER_PORT} `)
    );
  })
  .catch((err) => console.log(err));
