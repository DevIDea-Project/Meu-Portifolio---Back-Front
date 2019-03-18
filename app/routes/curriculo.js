var dbConnection = require('../../config/dbConnection');
var curriculoModels = require('../../app/models/curriculoModels');


module.exports = function(application) {

    application.get('/curriculo', function (req, res){
        res.render("curriculo/curriculo");
    });

    application.post('/curriculo/salvar', function(req, res){
        var mensagem = req.body;
        //res.send(mensagem); 
        
        var connection = dbConnection();
        var curriculoModel = curriculoModels();

        
        curriculoModel.salvarNoticia(mensagem, connection, function(error, result){
            res.redirect('/curriculo');
        });
    });
}; 


