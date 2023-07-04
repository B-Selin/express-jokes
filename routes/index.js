var express = require('express');
var router = express.Router();
// acquire the jokes controllers
const jokesCtrl = require('../controllers/jokes');

/* GET home page. */
router.get('/', jokesCtrl.index)

module.exports = router;
