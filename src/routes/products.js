const express = require('express');
const router = express.Router();
const StoreItem = require('../models/storeItem');




router.get('/products', async (req, res) => {
  res.status(200).json({message: 'Can get products'})
})



router.post('/products' , async (req, res) => {

})

module.exports = router