require("dotenv").config();

const express = require("express");
const cors = require("cors");

const { PORT } = process.env;
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

//
app.use(express.json());
app.use(cors());

// conecting the Auth
app.post("/register", register);
app.post("/login", login);

// grabbing all the post using get
app.get("/posts", getAllPosts);

//grabbing and addign authentication to the users path
app.get("/userposts/:userId", getCurrentUserPosts);
app.get("/posts", isAuthenticated, addPost);
app.get("posts/:id", isAuthenticated, editPost);
app.delete("/posts/:id", isAuthenticated, deletePost);

// settting the app to listen on the port i set in the .env file
app.listen(PORT, () =>
  console.log(`db sync successful & server running on port ${PORT} `)
);
