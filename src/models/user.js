const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'user'
    }
});

module.exports = mongoose.model('user', userSchema);