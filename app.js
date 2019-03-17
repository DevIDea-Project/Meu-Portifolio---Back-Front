const express = require("express");
const path = require("path"); //Pesquisar sobre o path Express
const app = express();
const bodyParser = require('body-parser');


app.set("views", path.join(__dirname, "./app/views"));
app.set("view engine", "ejs");

app.use(express.static(__dirname + "public"));

app.use("/img", express.static(__dirname + "/public/img"));
app.use("/js", express.static(__dirname + "/node_modules/bootstrap/dist/js"));
app.use("/js", express.static(__dirname + "/node_modules/jquery/dist"));
app.use("/js", express.static(__dirname + "/public/JS"));
app.use("/js", express.static(__dirname + "/public/JS"));
app.use("/js", express.static(__dirname + "/public/JS"));
app.use("/styles", express.static(__dirname + "/node_modules/bootstrap/dist/css"));
app.use("/styles", express.static(__dirname + "/public/styles"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

module.exports = app;
