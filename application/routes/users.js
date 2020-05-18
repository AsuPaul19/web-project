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
  });
});

router.post('/logout', (req, resp, next) => {
  req.session.destroy((err) => {
    if(err){
      errorPrint('Session could not be destroyed');
      next(err);
    } else{
      successPrint('session was destroyed, user is logged out');
      resp.clearCookie('csid');
      resp.redirect('/login');
    }
  })
})

module.exports = router;
