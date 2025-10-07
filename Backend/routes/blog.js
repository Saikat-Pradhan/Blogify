const express = require("express");
const route = express.Router();
const { getAllBlogs, getBlog, addBlog } = require("../controller/blog");

route.get("/", getAllBlogs);
route.get("/:id", getBlog);
route.post("/", addBlog);

module.exports = route;
