var express = require('express');
var router = express.Router();

/* GET home page. */
<<<<<<< HEAD
router.get('/', function(req, res, next) {
=======
router.get('/', function(req, res) {
>>>>>>> add express
  res.render('index', { title: 'Express' });
});

module.exports = router;
