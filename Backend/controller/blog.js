const Blogs = require("../models/blog");

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blogs.find();
    return res.json(blogs);
  } catch (err) {
    return res.status(500).json({ error: "Failed to fetch blogs" });
  }
};

const getBlog = async (req, res) => {
  try {
    const blog = await Blogs.findById(req.params.id);
    if (!blog) return res.status(404).json({ error: "Blog not found" });
    return res.json(blog);
  } catch (err) {
    return res.status(500).json({ error: "Failed to fetch blog" });
  }
};

const addBlog = async (req, res) => {
  const { title, body, author } = req.body;

  if (!title || !body || !author) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const newBlog = await Blogs.create({ title, body, author });
    return res.status(201).json(newBlog);
  } catch (err) {
    return res.status(500).json({ error: "Failed to create blog" });
  }
};

module.exports = { getAllBlogs, getBlog, addBlog };