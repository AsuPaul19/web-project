var express = require('express');
var router = express.Router();
const errorPrint = require('../helpers/debug/debughelpers').errorPrint;
const successPrint = require('../helpers/debug/debughelpers').successPrint;
const UserError = require('../helpers/errors/UserError');

// router.post('/register', (req, resp, next) => {
//   console.log(req);
// })

/* GET users listing. */
//localhost:3000/users
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  res.sendFile('homepage.html', {root: 'public/'});
});

// //localhost:3000/users/register
// router.post('/register', function(req, res, next) {
//   res.send('respond with a resource');
// });
//////////////////////////

router.get('/login', function(req, res, next) {
  res.sendFile('signin.html', {root:'public/'});
});

/* Get post image page. */
router.get('/post', function(req, res, next) {
  res.sendFile('postimage.html', {root:'public/'});
});

//localhost:300/users/register
router.get('/register', function(req, res, next) {
  res.sendFile('registration.html', {root:'public/html'});
});

router.get('/signin', function(req, res, next) {
  res.sendFile('signin.html', {root:'public'});
});
//////////////////////////

router.post('/login', (req, resp, next)=>{
  let username = req.body.username;
  let password = req.body.password;

  db.execute("SELECT * FROM users WHERE username=? AND password=?",[
    username, 
    password,
  ])
  .then(([results, fields]) =>{
    if(results && results.length == 1 ){
      successPrint('successful Login');
      resp.redirect('/signin.html');
    }else{
      throw new UserError('username or password is incorrect','/login', 200);
    }
  })
  .catch((err) => {
    if(err instanceof UserError){
      errorPrint(err.getMessage());
      resp.status(err.getStatus());
    resp.redirect(err.getRedirectURL());
    }else{
      next(err);
    }
  })

  
});

module.exports = router;
