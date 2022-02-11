const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
    min: 0,
  },
  category: {
    type: String,
    enum: [
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
    ],
  },
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
