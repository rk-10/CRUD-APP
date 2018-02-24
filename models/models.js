var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name: String,
    address: String,
    position: String,
    salary: Number,
});


module.exports = mongoose.model('User', UserSchema);