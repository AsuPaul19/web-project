var express = require('express');
var router = express.Router();

/* GET users listing. */
//localhost:3000/users
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//localhost:3000/users/register
router.post('/register', function(req, res, next) {
  res.send('respond with a resource');
});
//////////////////////////

router.get('/login', function(req, res, next) {
  res.sendFile('login.html', {root:'public/'});
});

router.get('/registration', function(req, res, next) {
  res.sendFile('registration.html', {root:'public'});
});
//////////////////////////
module.exports = router;
