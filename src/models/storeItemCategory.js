const mongoose = require('mongoose');
const { Schema } = mongoose;

const storeItemCategorySchema = new Schema({
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

module.exports = mongoose.model('storeItemCategory', storeItemCategorySchema);