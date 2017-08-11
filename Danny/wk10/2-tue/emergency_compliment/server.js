const PORT = 5000
var express = require("express");
var app = express();
var request = require("request");
var _ = require("lodash")
var bodyParser = require("body-parser")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))

app.use(function(req, res, next){
  console.log("someone made a request");
  next();
})

var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
]

var complimentsController = require("./controllers/complimentsController")


var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

app.set('views', './views')
app.set('view engine', 'ejs')

app.get("/", function(req, res) {
  res.render("index", {compliment: _.sample(compliments), color: _.sample(colors), name: req.params.name})
})

app.get("/:name", function(req, res) {
  res.render("index", {compliment: _.sample(compliments), color: _.sample(colors), name: req.params.name})
})

app.post("/", function(req,res) {
  compliments.push(req.body.compliment)
  res.redirect("/")
})

app.listen(PORT)
