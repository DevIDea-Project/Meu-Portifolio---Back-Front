module.exports = function (app) {
    app.get('/curriculo', (req, res) => {
        res.render("curriculo/curriculo");
    });
};