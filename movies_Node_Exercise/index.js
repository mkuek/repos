const express = require("express");
const app = express();
const path = require("path");
let db = require("./db");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home", { db });
});
app.get("/movie-list", (req, res) => {
  res.render("movie-list", { db });
});
app.get("/movie-details/:movieID", (req, res) => {
  const { movieID } = req.params;
  const movieInfo = db.filter((info, index) => index == movieID);
  res.render("movie-details", { db, movieID, movieInfo });
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
