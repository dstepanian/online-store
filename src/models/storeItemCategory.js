const mongoose = require('mongoose');
const { Schema } = mongoose;

const storeItemCategorySchema = new Schema({
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('storeItemCategory', storeItemCategorySchema);