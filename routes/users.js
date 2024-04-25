var express = require('express');
var db = require('../db');
var router = express.Router();

console.log("Starting /students with the database:")
console.table(db.db)

/* GET users listing. */
router.get('/:reg', function(req, res, next) {
  let reg = req.params.reg.replace('_', '/');
  let student = db.get(reg)
  if(student){
     res.statusCode = 200;
     res.json(student);
  }else{
    res.statusCode = 404;
  }
});

module.exports = router;
