const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/cds", (req, res) => {
  let albumInfo = [
    {
      name: "The Carter",
      date: "2004",
      imgURL:
        "https://upload.wikimedia.org/wikipedia/en/d/d8/Lil_Wayne_-_Tha_Carter.jpg",

      songTitles: ["song1", "song2", "song3", "song4"],
    },
    {
      name: "Free Weezy",
      date: "2015",
      imgURL: "images/FreeWeezy.jpg",

      songTitles: ["song1", "song2", "song3", "song4"],
    },
  ];
  const songNames = albumInfo.map((song, index) => {
    return [song.name].join("");
  });
  const albumDate = albumInfo.map((album, index) => {
    return [album.date].join("");
  });
  const numCDs = songNames.length;

  res.render("cds", { songNames, albumDate, numCDs });
});

app.get("/albums/:albumNum", (req, res) => {
  const { albumNum } = req.params;
  let weezyInfo = [
    {
      name: "The Carter",
      publishDate: "2004",
      imgURL:
        "https://upload.wikimedia.org/wikipedia/en/d/d8/Lil_Wayne_-_Tha_Carter.jpg",

      songTitles: ["song1", "song2", "song3", "song4"],
    },
    {
      name: "Free Weezy",
      description: "2015",
      imgURL: "https://upload.wikimedia.org/wikipedia/en/a/ae/FreeWeezy.jpg",

      songTitles: ["song1", "song2", "song3", "song4"],
    },
  ];
  const titles = weezyInfo.map((title, index) => {
    return [title.name].join("");
  });
  const songs = weezyInfo.map((song, index) => {
    return [song.songTitles].join("");
  });
  const images = weezyInfo.map((image, index) => {
    return [image.imgURL].join("");
  });
  res.render("cdInfo", { titles, songs, images, albumNum });
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
