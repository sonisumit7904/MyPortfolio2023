const express = require("express");
const bodyParser = require("body-parser");
const app = express();
// import date.js
const date = require(__dirname + "/date.js");
// console.log(date);
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

var items = ["Buy Food", "Cook Food", "Eat Food"];
var workList = [];
app.get("/", function (req, res) {
  // res.sendFile(__dirname+"/index.html");

  // using the date we imported from date.js as a function, initially it was only name of function, but we used it when we added name() to name;  
  let day = date.getdate();
  res.render("lists.ejs", { listTitle: day, newListitems: items });
  // name of ejs - lists or lists.ejs both are fine
});
app.post("/", function (req, res) {
  let route = req.body.btn;
  let item = req.body.newitem;
  if (route === "Work") {
    workList.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", function (req, res) {
  res.render("lists", { listTitle: "Work", newListitems: workList });
});

app.get("/about", function (req, res) {
  res.render("about");
});

const port = 4000 || 5000 || 3000 || process.env.PORT;
app.listen(port, function () {
  console.log("Server is Running at port ",port);
});
