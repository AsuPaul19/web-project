var express       = require("express");
var path          = require("path");
var cookieParser  = require("cookie-parser");
var logger        = require("morgan");
var bodyParser    = require("body-parser");
var session       = require("express-session");
var mysqlStore    = require("express-mysql-session")(session);
var indexRouter   = require("./routes/index");
var usersRouter   = require("./routes/users");
var postRouter   = require("./routes/posts");
var dbRouter      = require("./routes/dbtest");
var app           = express();

app.use(logger("dev"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public/html')));

var sessionStore = new mysqlStore({/* using default option*/}, require('./conf/database'));
var sessionOptions = {
    key: "csid",
    secret: "this is a secret for csc317",
    store: sessionStore,
    cookie: {secure: false, httpOnly: false, maxAge: 900000},
    resave: false,
    saveUninitialized: false
};

app.use(session(sessionOptions));
app.use("/public", express.static(path.join(__dirname, "public/html")));
app.use("/images", express.static(path.join(__dirname, "public/images")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/dbtest", dbRouter);
app.use("/posts", postRouter);


module.exports = app;
