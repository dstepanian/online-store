const Product = require('../models/storeItem');

class ProductController {
    async getAllProducts(req, res) {
        try {
            const products = await Product.find();
            res.json(products);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching products' });
        }
    }

    async createProduct(req, res) {
        try {
            const { title, image, category, price, description } = req.body;
            const product = new Product({ title, image, category, price, description });
            await product.save();
            res.json({ message: 'Product created successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error creating product' });
        }
    }

    async getProductById(req, res) {
        try {
            const id = req.params.id;
            const product = await Product.findById(id);
            res.json(product);
        } catch (error) {
            res.status(404).json({ message: 'Product not found' });
        }
    }

    async updateProduct(req, res) {
        try {
            const id = req.params.id;
            const { title, image, category, price, description } = req.body;
            const product = await Product.findByIdAndUpdate(id, { title, image, category, price, description });
            res.json({ message: 'Product updated successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error updating product' });
        }
    }

    async deleteProduct(req, res) {
        try {
            const id = req.params.id;
            await Product.findByIdAndRemove(id);
            res.json({ message: 'Product deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error deleting product' });
        }
    }
}

module.exports = ProductController;