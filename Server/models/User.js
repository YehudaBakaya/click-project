const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    token: {
        type: String,
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,  
        required: true
    }
});


const User = mongoose.model('User', userSchema);

module.exports = User;
