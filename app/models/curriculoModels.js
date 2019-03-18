module.exports = function(){
    this.salvarNoticia = function (mensagem, connection, callback){
        connection.query('insert into informacao set ? ', mensagem, callback);
    }
    return this;
}

