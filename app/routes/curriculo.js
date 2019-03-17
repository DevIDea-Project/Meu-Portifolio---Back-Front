module.exports = function (app) {

    app.get('/curriculo', (req, res) => {
        const mysql = require('mysql');

        var connection = mysql.createConnection({
            host:'localhost',
            user:'root',
            password:'',
            database:'PortifolioDB'
        });

        connection.query('select * from informacao', function(error, result){
             //res.send(result);
             res.render("curriculo/curriculo", {curriculo: result});
        });

        
    });
};