const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Blog = require("./models/blogs");
const { log } = require("console");
const methodOverride = require("method-override");
const categories = [
  "Fiction",
  "Young Adult",
  "Romance",
  "Non-Fiction",
  "Children",
  "Adventure",
  "Health",
  "History",
  "Travel",
  "Art",
  "Humor",
  "Sci-Fi",
  "Mystery",
  "Horror",
];

mongoose
  .connect("mongodb://localhost:27017/blogPosts")
  .then(() => {
    console.log("MONGO CONNECTION OPEN");
  })
  .catch((err) => {
    console.log("MONGO CONNECTION ERROR!!");
    console.log(err);
  });

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.get("/blog", async (req, res) => {
  const { category } = req.query;
  if (category) {
    const blogs = await Blog.find({ category });
    res.render("blog/index", { blogs, category });
  } else {
    const blogs = await Blog.find({});
    res.render("blog/index", { blogs, category: "All" });
  }
});

app.get("/blog/new", (req, res) => {
  res.render("blog/new", { categories });
});

app.post("/blog", async (req, res) => {
  const newBlog = new Blog(req.body);
  await newBlog.save();
  console.log(newBlog);
  res.redirect(`/blog/${newBlog.id}`);
});

app.get("/blog/:id", async (req, res) => {
  const { id } = req.params;
  const blog = await Blog.findById(id);
  console.log(blog);
  res.render("blog/show", { blog });
});

app.get("/blog/:id/edit", async (req, res) => {
  const { id } = req.params;
  const blog = await Blog.findById(id);
  res.render("blog/edit", { blog, categories });
});

app.put("/blog/:id", async (req, res) => {
  const { id } = req.params;
  const blog = await Blog.findByIdAndUpdate(id, req.body, {
    runValidators: true,
    new: true,
  });
  res.redirect(`/blog/${blog._id}`);
});

app.delete("/blog/:id", async (req, res) => {
  const { id } = req.params;
  const deletedBlog = await Blog.findByIdAndDelete(id, req.body);
  res.redirect(`/blog`);
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
