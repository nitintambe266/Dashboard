var router = require('express').Router();
var db = require('../db_layer/mongo_controller');
var User = require('./user_profile_model')

router.get('/getprofile', function (req, res) {
    
})

router.post('/updateprofile', function (req, res) {
   
})

router.post('/searchprofile', function (req, res) {
   
})

router.get('/update_prf', function (req, res) {
    res.send('update');
})

router.post('/add_prf', function (req, res) {
    var data = req.body.user;
    db.save_data(new User(data)).then(function () {
        res.send("done")
    })
})


module.exports = router;