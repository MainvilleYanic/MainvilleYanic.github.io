//Fichier tiré grandement du Net Ninja à https://www.youtube.com/watch?v=w-7RQ46RgxU&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp

//Dependencies
var express = require("express");
var ejs = require("ejs");

var controller = require("./controller");

//App and port number
var app = express();
var port = 3000;

app.set("view engine", "ejs");

app.use(express.static("./public"));

controller(app);

app.listen(port);
console.log("The program is listening to port " + port + ".");