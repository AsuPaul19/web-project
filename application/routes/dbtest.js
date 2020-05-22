const express = require('express');
const router = express.Router();
const db     = require('../conf/database');

router.get('/getAllUsers', (req, res, next) =>{
    db.query('SELECT * from users;',(err, results, fields) => 
    {
        console.log(results);
        res.send(results);
    })
});

router.get('/getAllPosts', (req, res, next) =>{
    db.query('SELECT * from posts;',(err, results, fields) => 
    {
        console.log(results);
        res.send(results);
    })
});

// trying with promise
router.get('/getAllPostsP', (req, res, next) =>{
    db.query('SELECT * from posts;')
    .then(([results, fields]) => {
        console.log(results);
        return db.query('SELECT * FROM posts WHERE id=2');
    })
    .then(([results, fields]) => {
        console.log(results);
        res.send(results);
    })
});

router.post('/createUser',(req, res, next) =>{
    console.log(req.body);
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;

    // res.redirect('/registration');
    let baseSQL = 'INSERT INTO users (username, email, password, created) VALUES (?, ?, ?, now())';
    db.query(baseSQL, [username, email, password]).then(([results, fields]) =>{
        if(results && results.affectedRows){
            res.redirect('/signin.html');
            // res.send('user was made');
        }else{
            res.redirect('/registration.html');
        }
    })
    .catch((err) =>{
        next(err);
    })
})

router.post('/login', (req, res, next) =>{
    let username = req.body.username;
    let password = req.body.password;

    db.execute("SELECT * FROM users WHERE username=? AND password=?", [username, password])
    db.query(baseSQL, [username, password]).then(([results, fields]) =>{
        if(results && results.length == 1){
            // successPrint('successful Login');
            Resp.redirect('/homepage.html');
        }else{
            successPrint('failed to Login');
            res.redirect('/registration.html');
        }
    })
    .catch((err) =>{
        next(err);
    })
})
module.exports = router;