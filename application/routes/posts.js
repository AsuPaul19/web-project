var express         = require("express");
var router          = express.Router();
const errorPrint    = require('../helpers/debug/debughelpers').errorPrint;
const successPrint  = require('../helpers/debug/debughelpers').successPrint;
const db            = require("../conf/database");
const multer        = require('multer');
const sharp         = require('sharp');
const crypto        = require('crypto');


var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "public/images/uploads")
    },
    filename: function(req, file, cb){
        let fileExt = file.mimetype.split("/")[1];
        let randomName = crypto.randomBytes(22).toString("hex");
        cb(null, `${randomName}.${fileExt}`);
    }
});
var uploader = multer({storage: storage});
// uploader.single('uploadImage')

router.post('/createPost',uploader.single('uploadImage'), (req, resp, next) =>{
    let fileUpleaded = req.file.path;
    let fileAsThumbnail = `thumbnail-${req.file.fieldname}`;
    let destOfThumbnail = req.file.destination+"/" + fileAsThumbnail;
    let title = req.body.title;
    let desc = req.body.description;
    let fk_userid = req.session.userID;
    
    sharp(fileUpleaded)
        .resize(200)
        .toFile(destOfThumbnail)
        .then(() =>{
            let baseSQL = "INSERT INTO posts (title, description, photopath, thumbnail, created, fk_userid) VALUES (?, ?, ?, ?, now(), ?);"
            return db.execute(baseSQL,[title, desc, fileUpleaded, destOfThumbnail, fk_userid]);
        })
        .then(([results, fields]) =>{
            if(results && results.affectedRows) {
                successPrint('new post created');
                resp.redirect('/');
            }else{
                next(Error('post was not created'));
            }
        })
        .catch((err) =>{next(err)});

    console.log(req.file);
    resp.send('file upleaded');
    // resp.send('i work');
});

module.exports = router;