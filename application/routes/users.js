var express = require('express');
var router = express.Router();
const errorPrint = require('../helpers/debug/debughelpers').errorPrint;
const successPrint = require('../helpers/debug/debughelpers').successPrint;
const UserError = require('../helpers/errors/UserError');


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

router.get('/registrationform', function(req, res, next) {
  res.sendFile('Registrationform.html', {root:'public'});
});

router.get('/signin', function(req, res, next) {
  res.sendFile('signin.html', {root:'public'});
});
//////////////////////////
module.exports = router;
