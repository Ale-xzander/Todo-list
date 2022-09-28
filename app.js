const express = require("express");

const bodyParser = require("body-parser");

const app = express()

var items = [];

app.use(bodyParser.urlencoded({
  extended: true
}))

app.set("view engine", "ejs")


app.get("/", function(req, res) {

  var options = {
    day: "numeric",
    weekday: "long",
    month: "long"
  }

  var today = new Date();
  var currentDay = today.toLocaleString("en-US", options)

  res.render("list", {
    kindOfDay: currentDay,
    newListItems: items
  })
})

app.post("/", function(req, res){
 var item = req.body.newItems;

 items.push(item)

res.redirect("/");
})


app.listen(3000, function() {
  console.log("server is live on 3k");
})
