const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    age: {
        type: Number
    },
    topics: {
        type: String
    }
});

const User = mongoose.model('user', UserSchema);

module.exports = User;