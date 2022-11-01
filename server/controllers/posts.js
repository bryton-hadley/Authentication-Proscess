require("dotenv").config();

module.exports = {
  getAllPosts: (req, res) => {
    console.log("get all posts");
  },

  getCurrentUserPosts: (reg, res) => {
    console.log("current user posts");
  },

  addPost: (reg, res) => {
    console.log("add posts");
  },

  editPost: (req, res) => {
    console.log("edit post");
  },

  deletePost: (req, res) => {
    console.log("delete post");
  },
};
