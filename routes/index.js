var express = require('express');
var router = express.Router();

/* GET home page. */
<<<<<<< HEAD
<<<<<<< HEAD
router.get('/', function(req, res, next) {
=======
router.get('/', function(req, res) {
>>>>>>> add express
=======
router.get('/', function(req, res) {
>>>>>>> f7b0e8e2a00bdea6f309add7b07888569cd80b0c
  res.render('index', { title: 'Express' });
});

module.exports = router;
