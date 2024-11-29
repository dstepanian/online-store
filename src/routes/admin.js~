const express = require('express');
const router = express.Router();
const Product = require('../models/storeItem');

router.get('/', async (req, res) => {
    const products = await Product.find();
    // res.json(products);
    res.json({ message: 'Can open admin page' });
});

router.get('/create', (req, res) => {
    res.json({ message: 'Can create product' });
});

router.post('/create', async (req, res) => {
    const { title, image, category, price, description } = req.body;
    const product = new Product({ title, image, category, price, description });
    await product.save();
    res.json({ message: 'Product created successfully' });
});

router.get('/edit/:id', async (req, res) => {
    const id = req.params.id;
    const product = await Product.findById(id);
    res.json(product);
});

router.post('/edit/:id', async (req, res) => {
    const id = req.params.id;
    const { title, image, category, price, description } = req.body;
    const product = await Product.findByIdAndUpdate(id, { title, image, category, price, description });
    res.json({ message: 'Product updated successfully' });
});

router.get('/delete/:id', async (req, res) => {
    const id = req.params.id;
    await Product.findByIdAndRemove(id);
    res.json({ message: 'Product deleted successfully' });
});

module.exports = router;