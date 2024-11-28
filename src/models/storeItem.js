const mongoose = require('mongoose');
const { Schema } = mongoose;


const storeItemSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    image: String,
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'storeItemCategory'
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
    },
    madeIn: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'country'
    },
    brand: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'brand'
    }
})

module.exports = mongoose.model('storeItem', storeItemSchema);