var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, _) {
  res.render('about');
});

module.exports = router;
