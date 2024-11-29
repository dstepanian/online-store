const express = require('express');
const router = express.Router();

const authRoutes = require('./auth')
const productRoutes = require('./products')
const adminRoutes = require('./admin')

router.use('/auth', authRoutes)
router.use('/', productRoutes)
router.use('/admin', adminRoutes)

module.exports = router