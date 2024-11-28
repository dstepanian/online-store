const express = require('express');
const router = express.Router();
const StoreItem = require('../models/storeItem');
const {isAdmin} = require("../middleware/auth");

router.get('/products', async (req, res) => {
    try {
        const products = await StoreItem.find();
        res.json(products);
    } catch (err) {
        console.log(err);
    }
})

router.post('/products', isAdmin , async (req, res) => {
    try {
        const { title, image, category, price, description, madeIn, brand } = req.body;
        const newProduct = new StoreItem({ title, image, category, price, description, madeIn, brand });
        await newProduct.save();
        res.json(newProduct).json({ message: 'Product created successfully' });
    } catch (err) {
        console.log(err);
    }
})

module.exports = router