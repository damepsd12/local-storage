const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    sex: { type: String, required: false },
    birthDay: { type: String, required: false },
    birthMonth: { type: String, required: false },
    birthYear: { type: String, required: false },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;



