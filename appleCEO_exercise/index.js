const express = require("express");
const app = express();
const path = require("path");
let db = require("./db");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home", { db });
});
app.get("/ceo-list", (req, res) => {
  res.render("ceo-list", { db });
});
app.get("/ceo-details/:slug", (req, res) => {
  const { slug } = req.params;
  if (db.filter((ceo) => ceo.slug == slug)) {
    const ceoName = db.filter((ceo, index) => ceo.slug == slug);
    console.log(ceoName[0].name);
    res.render("ceo-details", { db, slug, ceoName });
  } else {
    console.log("nothing found");
  }
});

// app.get("/albums/:albumNum", (req, res) => {
//   const { albumNum } = req.params;
//   let weezyInfo = [
//     {
//       name: "The Carter",
//       publishDate: "2004",
//       imgURL:
//         "https://upload.wikimedia.org/wikipedia/en/d/d8/Lil_Wayne_-_Tha_Carter.jpg",

//       songTitles: ["song1", "song2", "song3", "song4"],
//     },
//     {
//       name: "Free Weezy",
//       description: "2015",
//       imgURL: "https://upload.wikimedia.org/wikipedia/en/a/ae/FreeWeezy.jpg",

//       songTitles: ["song1", "song2", "song3", "song4"],
//     },
//   ];
//   const titles = weezyInfo.map((title, index) => {
//     return [title.name].join("");
//   });
//   const songs = weezyInfo.map((song, index) => {
//     return [song.songTitles].join("");
//   });
//   const images = weezyInfo.map((image, index) => {
//     return [image.imgURL].join("");
//   });
//   res.render("cdInfo", { titles, songs, images, albumNum });
// });

app.listen(3000, () => {
  console.log("listening on port 3000");
});
