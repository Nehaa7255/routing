var express = require('express');
var router = express.Router();
const port = 3000


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/register', function(req, res, next) {
  res.render('register');
});
router.get('/submit', function(req, res, next) {
  res.render('submit');
});

module.exports = router;
