const express = require("express");
const route = express.Router();
const { getAllBlogs, getBlog, addBlog } = require("../controller/blog");

// Just for awake backend
route.get("/ping", (req, res) => {
  res.status(200).send("pong");
});

route.get("/", getAllBlogs);
route.get("/:id", getBlog);
route.post("/", addBlog);

module.exports = route;
