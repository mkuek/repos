const mongoose = require("mongoose");
const cities = require("./cities");
const { places, descriptors, genres } = require("./seedHelpers");
const Blog = require("../models/blogs");

mongoose.connect("mongodb://localhost:27017/blogPosts");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("DATABASE CONNECTED");
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
  await Blog.deleteMany({});
  for (let i = 0; i < 25; i++) {
    const camp = new Blog({
      title: `${sample(descriptors)} ${sample(places)}`,
      body: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem optio minima alias error sit dolorem natus est, illo architecto perferendis? Error molestiae magni voluptate quidem ipsam excepturi quisquam molestias rerum?`,
      category: `${sample(genres)}`,
    });
    await camp.save();
  }
};
seedDB().then(() => {
  mongoose.connection.close();
});
