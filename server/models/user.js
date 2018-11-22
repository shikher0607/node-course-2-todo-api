var mongoose = require('mongoose');

var users = mongoose.model('users', {
    email: {
        type: String,
        minlength: 1,
        required: true,
        trim: true
    } 
 });

 module.exports = {users};