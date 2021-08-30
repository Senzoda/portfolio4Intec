// start point de mon API

const express = require('express');

const app = express();

require('dotenv').config();

const bodyParser = require("body-parser");
const morgan  =  require('morgan'); //morgan sert à précisier si on est en dev ou en production.

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/public')); //permettre à node js d'utiliser les fichiers statiques dans le projet

app.set('views', './view');
app.set('view engine', 'ejs'); // signale à nodejs qu'on utilise ejs comme template de vue




app.use((req, res, next) => {

    res.setHeader('Access-Control-Allow-Origin', process.env.Allow_Origin);
    res.setHeader('Access-Control-Allow-Headers', process.env.Allow_Headers);
    res.setHeader('Access-Control-Allow-Methods', process.env.Allow_Methods);

    next();

});


const api = require('./routes/routing.js')

app.use('/', api);



module.exports = app; //création d'un module


