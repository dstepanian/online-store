const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const { registerValidation } = require('../middleware/validations');
const {validationResult} = require("express-validator");
const { isAdmin } = require('../middleware/auth');

const router = express.Router();

router.post('/register', registerValidation, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() , message: 'You gave non right data' });
    }

    const { name, email, password, isAdmin } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User ({name, email, password: hashedPassword, isAdmin});
        await user.save();

        res.status(200).json({message: 'User registered successfully'});
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
        console.log(err);
    }
})
router.post('/login', isAdmin, async (req, res) => {
    try {
        const { email, password } = req.body;

        console.log(req.user)

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid password' });
        }

        if (!user.isAdmin) {
            return res.status(403).json({ message: 'You are not an admin' });
        }

        res.status(200).json({ message: 'User logged in successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
        console.log(err);
    }
})

module.exports = router