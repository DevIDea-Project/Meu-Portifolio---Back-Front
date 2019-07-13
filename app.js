const express = require("express");
const path = require("path"); //Pesquisar sobre o path Express
const app = express();
const bodyParser = require('body-parser');
const consign = require('consign');

app.use(bodyParser.urlencoded({extended: true}));
app.set("views", path.join(__dirname, "./app/views"));
app.set("view engine", "ejs");
app.set("views", "./app/views");

consign()
     .include('app/routes')
     .then('config/dbConnection.js')
     .then('config/server.js')
     .then('app/models')
     .then('app/controllers')
     .into(app)

const staticos = function(){
     app.use(express.static('public'));
     app.use("/js", express.static(__dirname + "/node_modules/bootstrap/dist/js"));
     app.use("/js", express.static(__dirname + "/node_modules/jquery/dist"));
     app.use("/styles", express.static(__dirname + "/node_modules/bootstrap/dist/css"));
     
}()
module.exports = app;
