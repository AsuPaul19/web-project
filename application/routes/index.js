var express         = require('express');
var router          = express.Router();
var path            = require("path");
var isLoggedIn      = require('../middleware/routeprotectors').userIsLoggedIn;
const errorPrint    = require("../helpers/debug/debughelpers").errorPrint;
const successPrint  = require("../helpers/debug/debughelpers").successPrint;

/* GET home page. */
//localhost:3000
router.get("/", function(req, res, next) {
  res.sendFile("index.html",{root: "public/html"});
});

/* Get login page */
router.get("/login", function(req, res, next) {
  res.sendFile("signin.html", {root:"public/html"});
});

/* Get registration page. */
router.get("/register", function(req, res, next) {
  res.sendFile("registration.html", {root:"public/html"});
});

// exp-recv-request -> mw1 -> mw2 -> mw3 -> ... -> mwN -> route.verb

/* Get post image page. */
router.use("/postimage", isLoggedIn);

router.get("/postimage", function(req, res, next) {
  res.sendFile("postimage.html", {root:"public/html"});
});

module.exports = router;
