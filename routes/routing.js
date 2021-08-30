const express = require('express')
const app = express();
const router = express.Router(); //récupérer le router d'express
const home = require('../src/controller/home.controller');

router.get('/', home.homepage)
router.get('/portfolio', home.portfolio)
router.get('/contact', home.contact)
router.get('/details/:id', home.details)

router.post('/add', home.post)
// app.use('/', (req, res)=>{
//     res.render("pages/index")
// }); //url de base ajoutée à localhost:3000



module.exports = router;


