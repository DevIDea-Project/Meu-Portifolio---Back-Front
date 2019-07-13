function Mensagem (connection) {
    this._connection = connection;
}
Mensagem.prototype.getsalvarNoticia = function (mensagem, callback){
    this._connection.query('insert into informacao set ? ', mensagem, callback);
}
module.exports = function(){
    return Mensagem;
}

