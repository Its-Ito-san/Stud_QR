var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/about.html', function(_, res, _) {
  res.render('about');
});

module.exports = router;
