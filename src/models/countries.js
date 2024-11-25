const mongoose = require('mongoose');
const { Schema } = mongoose;

const countrySchema = new Schema({
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

module.exports = mongoose.model('country', countrySchema);