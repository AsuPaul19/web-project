const routeProtectors = {};
const errorPrint    = require("../helpers/debug/debughelpers").errorPrint;
const successPrint  = require("../helpers/debug/debughelpers").successPrint;


// exp-recv-request -> mw1 -> mw2 -> mw3 -> ... -> mwN -> route.verb
routeProtectors.userIsLoggedIn = function(req, resp, next){
    if(req.session.username) {
        successPrint('user is logged in');
        next();
    }else{
        errorPrint('user is not log in, sending to /login');
        resp.redirect("/login");
    }
}

module.exports = routeProtectors;