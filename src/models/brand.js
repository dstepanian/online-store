const mongoose = require('mongoose');
const { Schema } = mongoose;

const brandSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('brand', brandSchema);