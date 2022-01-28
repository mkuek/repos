const express = require("express");
const app = express();

// app.use((req, res) => {
//   console.log("WE GOT A REQUEST");
//   console.dir(req);
// });

app.get("/", (req, res) => {
  res.send("This is the homepage");
});

app.get("/r/:subreddit", (req, res) => {
  //   console.log(req.params);
  const { subreddit, postID } = req.params;
  res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`);
});

app.get("/r/:subreddit/:postID", (req, res) => {
  //   console.log(req.params);
  const { subreddit, postID } = req.params;
  res.send(
    `<h1>Viewing the PostID: ${postID} on the ${subreddit} subreddit</h1>`
  );
});

app.post("/cats", (req, res) => {
  res.send("Post requrest to /cats! This is a post request");
});
app.get("/cats", (req, res) => {
  res.send("MEOW!");
});

app.get("/dogs", (req, res) => {
  res.send("WOOF!");
});

app.get("/search", (req, res) => {
  const { q } = req.query;
  if (!q) {
    res.send("Nothing found if nothing searched");
  }
  res.send(`<h1>Search results for: ${q}</h1>`);
});

app.get("*", (req, res) => {
  res.send("Cannot find page!");
});

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
