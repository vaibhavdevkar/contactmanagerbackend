const mongoose = require('mongoose');

// Define schema
const userSchema = new mongoose.Schema({
    // id: { type: String },
    firstName: { type: String},
    lastName: { type: String },
    gender: { type: String },
    address: {
        line1: { type: String },
        line2: { type: String },
        city: { type: String },
        country: { type: String },
        zipCode: { type: String }
    },
    email: { type: String },
    phone: { type: String },
});

// Create User model
const User = mongoose.model('User', userSchema);

module.exports = User;
