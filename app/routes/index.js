module.exports = function(application){
    application.get('/', function(req, res){
            //res.send('Olá João Manoel');
            res.render('index');
    });
}