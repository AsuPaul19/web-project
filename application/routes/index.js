var express = require('express');
var router = express.Router();

/* GET home page. */
//localhost:3000
router.get('/', function(req, res, next) {
  res.sendFile('index.html');
});

//localhost:300/login
router.get('/login', function(req, res, next) {
  res.send('hello login.html');
});

//localhost:300/logout
router.get('/logout', function(req, res, next) {
  res.send('hello logout.html');
});

module.exports = router;
