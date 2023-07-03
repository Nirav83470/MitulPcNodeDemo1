var express = require('express');
const { dataadd } = require('../controller/resadddata');
var router = express.Router();




router.post('/restions`' , dataadd) 

module.exports = router;
