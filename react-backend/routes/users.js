var express = require('express');
var router = express.Router();

const fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {

  res.json({
  	id: 1,
  	username: "James Thomas",
  	location : "New York",
  }
  );
});

/* Post user edit. 
router.get('/edit', function(req, res, next) {
//return true;
});
*/

module.exports = router;