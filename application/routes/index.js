var express = require('express');
var router = express.Router();

/* GET home page. */
//localhost:3000
router.get('/', function(req, res, next) {
  res.sendFile('index.html');
});


/* Get login page */
router.get('/login', function(req, res, next) {
  res.sendFile('login.html', {root:'public/'});
});

/* Get registration page. */
router.get('/registration', function(req, res, next) {
  res.sendFile('registration.html', {root:'public/'});
});

//localhost:300/logout
router.get('/logout', function(req, res, next) {
  res.send('hello logout.html');
});



module.exports = router;
