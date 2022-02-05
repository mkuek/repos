const config = {
  host: "localhost",
  port: 5432,
  database: "todo_app",
  user: "postgres",
};
const pgp = require("pg-promise")();
const db = pgp(config);
const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//ADD TASK
app.post("/tasks", (req, res) => {
  newTaskTitle = req.body.title;
  db.none("INSERT INTO tasks (title) VALUES ($1)", newTaskTitle).then(() => {
    console.log(`Task ${newTaskTitle} was created`);
    res.redirect("/tasks");
  });
});

//GET ALL TASKS
app.get("/tasks", (req, res) => {
  db.any("SELECT * FROM tasks ORDER BY id")
    .then((results) => {
      res.render("home", { results });
    })
    .catch((e) => {
      console.log(e);
    });
});

//GET SPECIFIC TASK
app.get("/tasks/:id", (req, res) => {
  const { id } = req.params;
  db.one("SELECT * FROM tasks WHERE id=($1)", id)
    .then((results) => {
      res.send(results);
    })
    .catch((e) => {
      console.log(e);
    });
});

//UPDATE TASK TITLE
app.post("/tasks/:id/title", (req, res) => {
  const { id } = req.params;
  const updateTask = req.body.title;
  db.none("UPDATE tasks SET title=($1) WHERE id=($2)", [updateTask, id])
    .then((results) => {
      console.log(`Task ${id} was updated to ${updateTask}`);
      res.redirect("/tasks");
    })
    .catch((e) => {
      console.log(e);
    });
});

//UPDATE TASK COMPLETED
app.post("/tasks/:id/is_completed", (req, res) => {
  const { id } = req.params;
  const completeTask = req.body.is_completed;
  db.none("UPDATE tasks SET is_completed=($1) WHERE id=($2)", [
    completeTask,
    id,
  ])
    .then((results) => {
      console.log(`Task ${id} was updated to Complete: ${completeTask}`)
      res.redirect("/tasks");
    })
    .catch((e) => {
      console.log(e);
    });
});

//DELETE TASK
app.post("/tasks/:id", (req, res) => {
  const { id } = req.params;
  db.none("DELETE FROM tasks WHERE id=($1)", id)
    .then((results) => {
      console.log(`Task ${id} was deleted`);
      res.redirect("/tasks");
    })
    .catch((e) => {
      console.log(e);
    });
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
