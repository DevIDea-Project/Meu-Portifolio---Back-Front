module.exports = function(app) {
    app.get('/', (req, res) =>{
        app.app.controlers.home(app, req, res);
    });
}
