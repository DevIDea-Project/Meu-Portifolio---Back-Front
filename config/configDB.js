module.exports = function(){
    const mysql = require('mysql');

    const connection = mysql.createConnection({
       host: 'localhost',
        user:'root',
        password:'',
        database:'PortifolioDB'

    });
 
    connection.query(`CREATE TABLE IF NOT EXISTS informacao(idInformacao NUMBER, nome VARCHAR2(30), email VARCHAR2(40), mensagem VARCHAR2(400))`
    ,
        function(err) {
            if(err){
                console.log("Error!");
            }
        }
    );
    
    connection.query('INSERT INTO informacao SET ?', ["Bruno Vinicius","name001@email.com", "Excelente aplicação"], (err, res) => {
        if(err) throw err;
        
    });


    
}