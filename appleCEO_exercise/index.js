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
  const ceoInfo = db.filter((ceo, index) => ceo.slug == slug);
  res.render("ceo-details", { db, slug, ceoInfo });
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
