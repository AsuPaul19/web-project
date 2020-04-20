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
        // res.send(results);  // bc we only need id 2
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

    // validate dat, if bad send back response
    // res.redirect('/registration');

    let baseSQL = 'INSERT INTO users (username, email, password, created) VALUES (?, ?, ?, now())';
    db.query(baseSQL, [username, email, password]).then(([results, fields]) =>{
        if(results && results.affectedRows){
            res.send('user was made');
        }else{
            res.redirect('/registration');
            // res.send('user was not made for some reason');
        }
    })
    .catch((err) =>{
        next(err);
    })
})

module.exports = router;
