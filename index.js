var express = require('express');
var app = express();
var bodyparser = require('body-parser');

var mongoDB = require('./db_layer/mongo_controller')

var profile = require('./user_profile/user_profile_controller');
var admin = require('./admin/admin_controller');
var leaves = require('./leaves/leaves_controller');
var sharing = require('./sharing/sharing_controller');
var activities = require('./activities/activities_controller');

app.use(bodyparser());

app.use('/prf', profile);
app.use('/admn', admin);
app.use('/leaves', leaves);
app.use('/sharing', sharing);
app.use('/activities', activities);

app.get('/', function (req, res) {
    res.send('working');
})


app.listen(3000, () => {
    console.log("app is started");
})
