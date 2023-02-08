const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    roleId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserRole",
        required: true
    },
    contactNumber: {
        type: Number
    }
});

exports.User = mongoose.model('User',userSchema)