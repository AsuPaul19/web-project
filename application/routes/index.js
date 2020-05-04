var express = require('express');
var router = express.Router();
var path = require("path");

/* GET home page. */
//localhost:3000
router.get('/', function(req, res, next) {
  res.sendFile('index.html');
  // res.sendFile('homepage.html');
});

/* Get login page */
router.get('/login', function(req, res, next) {
  res.sendFile('signin.html', {root:'public/'});
});

/* Get registrationform page. */
router.get('/registration', function(req, res, next) {
  res.sendFile('registration.html', {root:'public/'});
});

/* Get home page. */
router.get('/homepage', function(req, res, next) {
  res.sendFile('homepage.html', {root:'public/'});
});

/* Get post image page. */
router.get('/post', function(req, res, next) {
  res.sendFile('postimage.html', {root:'public/'});
});


//localhost:300/logout
router.get('/logout', function(req, res, next) {
  res.send('hello logout.html');
});



module.exports = router;
