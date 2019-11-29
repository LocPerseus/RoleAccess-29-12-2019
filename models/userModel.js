const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, 'A user must have a email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'A user must have a password']
    },
    role: {
        type: String,
        default: 'guest',
        enum: ['admin', 'user', 'guest']
    },
    accessToken: {
        type: String
    }
})

const User = module.exports = mongoose.model('user', userSchema);