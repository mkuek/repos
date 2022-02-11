const mongoose = require("mongoose");
const Product = require("./models/blogs");

mongoose
  .connect("mongodb://localhost:27017/blogPosts")
  .then(() => {
    console.log("MONGO CONNECTION OPEN");
  })
  .catch((err) => {
    console.log("MONGO CONNECTION ERROR!!");
    console.log(err);
  });

// const p = new Product({
//   name: "Grapefruit",
//   price: 1.99,
//   category: "fruit",
// });

// p.save()
//   .then((p) => {
//     console.log(p);
//   })
//   .catch((e) => {
//     console.log(e);
//   });
const seedBlogs = [
  {
    title: "Fairy Eggplant",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem optio minima alias error sit dolorem natus est, illo architecto perferendis? Error molestiae magni voluptate quidem ipsam excepturi quisquam molestias rerum? Distinctio quam veritatis, eius deserunt, expedita sit at ex id, dolores unde odit deleniti atque doloremque praesentium nostrum nobis reprehenderit? Saepe perferendis blanditiis praesentium voluptatum distinctio modi temporibus asperiores fuga! Qui, animi maiores! Corporis cupiditate, voluptatibus, ipsa, cum sunt harum enim rem adipisci eum fugiat beatae labore nesciunt! Quibusdam est mollitia voluptatibus rem laboriosam fugit laborum distinctio excepturi sint dolor! Illo error expedita perferendis necessitatibus ut qui quisquam ad at libero eaque cupiditate fugit, delectus possimus provident. Totam quaerat corrupti, exercitationem explicabo dolor laudantium hic incidunt aperiam temporibus, ducimus ullam.Architecto mollitia quibusdam porro laudantium itaque, eaque inventore molestias. Impedit deleniti, ea recusandae alias dignissimos ipsam ut! Praesentium repudiandae quisquam tempora nihil iure quaerat quia doloremque. Mollitia blanditiis molestiae totam.",
    category: "Fiction",
  },
  {
    title: "Organic Goddess Melon",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem optio minima alias error sit dolorem natus est, illo architecto perferendis? Error molestiae magni voluptate quidem ipsam excepturi quisquam molestias rerum?",
    category: "Young Adult",
  },
  {
    title: "Organic Mini Seedless Watermelon",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem optio minima alias error sit dolorem natus est, illo architecto perferendis? Error molestiae magni voluptate quidem ipsam excepturi quisquam molestias rerum?",
    category: "Romance",
  },
  {
    title: "Organic Celery",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem optio minima alias error sit dolorem natus est, illo architecto perferendis? Error molestiae magni voluptate quidem ipsam excepturi quisquam molestias rerum?",
    category: "Non-Fiction",
  },
  {
    title: "Chocolate Whole Milk",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem optio minima alias error sit dolorem natus est, illo architecto perferendis? Error molestiae magni voluptate quidem ipsam excepturi quisquam molestias rerum?",
    category: "Children",
  },
];

Product.insertMany(seedBlogs)
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  });
