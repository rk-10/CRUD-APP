var mongoose = require('mongoose');

var RegisterSchema = new mongoose.Schema({
    email: String,
    username: String,
    password: Number,
    confirmpassword: Number
});

module.exports = mongoose.model('Register', RegisterSchema);