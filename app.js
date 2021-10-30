const express = require("express");
// const mongoose = require("mongoose");
const app = express();
const date = require(__dirname + "/date.js");
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// mongoose.connect("mongodb://localhost:27017/todoListDB");

// const listsSchema = new mongoose.Schema({
//   item: String,
// });
// const List = mongoose.model("List", listsSchema);

// const item1 = new List({ name: "mohit" });

var lists = [];
var works = [];
console.log(date.getDay());
app.get("/", (req, res) => {
  res.render("list", { head: date.getDate(), listItem: lists });
  // res.sendFile(__dirname + "/index.html");
});
app.post("/", (req, res) => {
  //  res.render("list", { listItem: lists[3] }); won't work

  if (req.body.add === "Work") {
    works.push(req.body.newItem);
    res.redirect("/work");
  } else {
    lists.push(req.body.newItem);
    res.redirect("/");
  }

  console.log(lists);
  console.log(req.body);
});

app.get("/work", (req, res) => {
  res.render("list", { head: "Work", listItem: works });
});
// app.post("/work", (req, res) => {});
app.get("/about", (req, res) => {
  res.render("about");
});
app.listen("3000", () => {
  console.log("server started");
});
