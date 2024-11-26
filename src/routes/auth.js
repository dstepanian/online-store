const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const { registerValidation } = require('../middleware/validations');
const {validationResult} = require("express-validator");

const router = express.Router();

router.post('/register', registerValidation, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() , message: 'You gave non right data' });
    }

    const { name, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User ({name, email, password: hashedPassword});
        await user.save();

        res.status(200).json({message: 'User registered successfully'});
    } catch {
        res.status(500).json({ message: 'Server error' });
    }
})

module.exports = router;