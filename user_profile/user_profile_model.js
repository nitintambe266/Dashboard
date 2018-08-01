var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var User_Schema = new Schema({

    email:String,
    name:String,
    lastname:String,
    phoneno:Number,
    address:String,
    company:String,
    contry:String,
    city:String,
    aboutme:String,
    dateofjoining:Date,
    theme:String,
    backgroundimage_path:String,
    profile_image:String
})

var User = mongoose.model('User', User_Schema);

module.exports = User;