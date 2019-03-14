var app = require('./app');
var http = require('http');
var server = http.createServer(app);

server.listen(8080, () => {
    console.log("Server ON");
});

const rotaHome = require("./app/routes/home");
rotaHome(app);
const rotaCurriculo = require("./app/routes/curriculo");
rotaCurriculo(app);
const rotaContato = require("./app/routes/contato");
rotaContato(app);