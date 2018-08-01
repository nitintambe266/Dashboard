var router = require('express').Router();
var db = require('../db_layer/mongo_controller');
var User = require('./admin_model')

router.get('/getuserprofile', function (req, res) {

})

router.post('/adduserprofile', function (req, res) {

})
//need to cross check this api
router.post('/updateuserpofile', function (req, res) {

})

router.post('/removeprofile', function (req, res) {

})

router.post('/getleavesbyuser', function (req, res) {

})

router.post('/modifyleavesbyuser', function (req, res) {

})

router.post('/updateholidaylist', function (req, res) {

})

router.post('/makeotheradmin', function (req, res) {

})

module.exports = router;