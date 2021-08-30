const express = require('express')
const app = express();
const router = express.Router();
const home = require('../src/controller/home.controller');

router.get('/', home.homepage)
router.get('/portfolio', home.portfolio)
router.get('/contact', home.contact)
router.get('/details/:id', home.details)

router.post('/add', home.post)






module.exports = router;


