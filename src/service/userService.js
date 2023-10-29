const User = require('../db/model/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


exports.registerUser = async (userData) => {
    try {
        const { firstName, lastName, email, phone, address, password } = userData;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already in use' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            firstName,
            lastName,
            email,
            phone,
            address,
            password: hashedPassword,
        });

        await newUser.save();

        // Create a JWT token for user authentication
        const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        return { message: 'Registration successful', token };
    } catch (error) {
        throw error;
    }
};

exports.loginUser = async (email, password) => {
    try {
        const user = await User.findOne({ email });

        if (!user) {
            throw new Error('Authentication failed');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (isPasswordValid) {
            const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            return { message: 'Authentication successful', token };
        } else {
            throw new Error('Authentication failed');
        }
    } catch (error) {
        throw error;
    }
};
