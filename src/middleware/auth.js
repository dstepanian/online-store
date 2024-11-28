const User = require('../models/user');

const isAdmin = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1]

        console.log(token)
        req.user = {
            name: 'aadadadasd',
            age: 2323222
        }

        const user = await User.findOne({email: req.body.email});
        if (!user.isAdmin && user.role !== 'admin') {
            return res.status(403).json({ message: 'You are not an admin' });
        }
        next();
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
        console.log(err);
    }
};

module.exports = { isAdmin };