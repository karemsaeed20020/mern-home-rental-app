const express = require('express');
const router = express.Router();
const authController = require("../controllers/auth.js");
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function(req,file, cb) {
        cb(null, "public/uploads")
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
})
const upload = multer({storage});
router.post('/register', upload.single("profileImage") ,authController.signup);
router.post('/login', authController.login);


module.exports = router;