/* Importar os módulos e o framework */
var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var app = express();

/* Setar as variaveis 'view engine' e 'views' do express */
app.set('view-engine', 'ejs'); //<-- engine é o modulo ejs
app.set('views', './app/views'); //<-- local onde estão localizadas as views

/* Configurar os middleware */
app.use(express.static('.app/public')); //express.static traz os arquivos staticos como se estivessem na raiz do projeto.[exemplo: CSS, IMAGENS E ETC..]
app.use(bodyParser.urlencoded({extended: true}));//BODY PARCER recebe as requisições via post
app.use(expressValidator());
/* autoload das routes, moldels e controllers na var app ;D */
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app)

module.exports = app;