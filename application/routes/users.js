var express = require("express");
var router = express.Router();
const bcrypt = require('bcrypt');
const errorPrint = require('../helpers/debug/debughelpers').errorPrint;
const successPrint = require('../helpers/debug/debughelpers').successPrint;
const UserError = require('../helpers/errors/UserError');
const db = require("../conf/database");

router.post("/register", (req, resp, next) => {
  let username = req.body.username;
  let email = req.body.email;
  let password = req.body.password;

    // validate, username, email, password
    //and make sure username and email don't already exists.
  
  db.execute('SELECT * FROM users WHERE username=?', [username])
    .then(([results, fields]) => {
      if (results && results.length == 0){
        return db.execute('SELECT * FROM users WHERE email=?',[email]);
      }else{
        throw new UserError(
          'Failed Registration, username already exists', 
          '/register', 
          200
        );
      }
  })
  .then(([results, fields]) => {
    if (results && results.length == 0){
      return bcrypt.hash(password, 10);
    }else{
      throw new UserError(
        "Failed Registration, email already exists", 
        "/register", 
        200
      );
    }
  })
  .then((hashedPassword) => {
    let baseSQL = 
        "INSERT INTO users (username, email, password, created) VALUES (?,?,?, now());";
      return db.execute(baseSQL, [username, email, hashedPassword]);
  })
  .then(([results, fields]) => {
      if(results && results.affectedRows) {
        successPrint("user has been created");
        resp.redirect("/login");
      } else {
        throw new UserError(
          "Server Error, user could not be created",
        "/register",
         500
         );
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
  });
});

router.post("/login", (req, resp, next) =>{
  let username = req.body.username;
  let password = req.body.password;
  let userID;
  //validate password
  db.execute("SELECT id, password FROM users WHERE username=?", [username])
  .then(([results, fields]) => {
    if (results && results.length == 1){
      let hPassword = results[0].password;
      userID = results[0].id;
      return bcrypt.compare(password, hPassword);
    } else {
      throw new UserError(
        "Failed login, username or password is invalid",
        '/login', 
        200
      );
    }
  })
  .then((result)=> {
    if (result) {
      successPrint("Login Successful!!");
      req.session.username = username;
      req.session.userID = userID;
      console.log(req.session);
      resp.redirect('/');
    } else {
      throw new UserError(
        "Failed login, username or password is incorrect",
        '/login', 
        200
      );
    }
  })
  .catch((err)=>{
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





// /** good work */
// var express = require('express');
// var router = express.Router();
// const errorPrint = require('../helpers/debug/debughelpers').errorPrint;
// const successPrint = require('../helpers/debug/debughelpers').successPrint;
// const UserError = require('../helpers/errors/UserError');

// // router.post('/register', (req, resp, next) => {
// //   console.log(req);
// // })

// //localhost:3000/users
// router.get('/', function(req, res, next) {
//   //res.send('respond with a resource');
//   res.sendFile('homepage.html', {root: 'public/html'});
// });

// // //localhost:3000/users/register
// // router.post('/register', function(req, res, next) {
// //   res.send('respond with a resource');
// // });
// //////////////////////////

// router.get('/login', function(req, res, next) {
//   res.sendFile('signin.html', {root:'public/html'});
// });

// /* Get post image page. */
// router.get('/post', function(req, res, next) {
//   res.sendFile('postimage.html', {root:'public/html'});
// });

// //localhost:300/users/register
// router.get('/register', function(req, res, next) {
//   res.sendFile('registration.html', {root:'public/html'});
// });

// router.get('/signin', function(req, res, next) {
//   res.sendFile('signin.html', {root:'public/html'});
// });


////** just comment 5/16 trying registration//

// router.post('/login', (req, resp, next)=>{
//   let username = req.body.username;
//   let password = req.body.password;

//   db.execute("SELECT * FROM users WHERE username=? AND password=?",[
//     username, 
//     password,
//   ])
//   .then(([results, fields]) =>{
//     if(results && results.length == 1 ){
//       successPrint('successful Login');
//       resp.redirect('/signin.html');
//     }else{
//       throw new UserError('username or password is incorrect','/login', 200);
//     }
//   })
//   .catch((err) => {
//     if(err instanceof UserError){
//       errorPrint(err.getMessage());
//       resp.status(err.getStatus());
//     resp.redirect(err.getRedirectURL());
//     }else{
//       next(err);
//     }
//   })
// });




// module.exports = router;