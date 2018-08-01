var mongoose = require('mongoose')

mongoose.connect('mongodb://atharva_cctech:atharva123@ds137661.mlab.com:37661/dashboard', function () {
    console.log('connected');
})

mongoose.connection.once('open', function (msg) {
    console.log(msg);
}).on('error', function (err) {
    console.log(err);
})


module.exports.save_data = function (model) {
    return model.save();
}

module.exports.update_data = function (model, data) {
  
}

