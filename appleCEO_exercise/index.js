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
  let filteredCEO=[]
  db.forEach((ceo, index) => {
    if(ceo.slug == slug){
      let prevCEO=db[index-1]!==undefined ? db[index-1] : {name:"end of list",year:"2022",slug:"end_of_list"}
      let nextCEO=db[index+1]!==undefined ? db[index+1] : {name:"end of list",year:"2022",slug:"end_of_list"}
      filteredCEO.push(prevCEO,nextCEO,ceo)
    } else {
      return false
    };
  });
  res.render("ceo-details", { db, slug, filteredCEO });
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
