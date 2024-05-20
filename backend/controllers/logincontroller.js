const User = require('../models/user');
const bcrypt = require('bcrypt');

const createUser = async (req, res) => {
    const { email, password } = req.body;

    // Input validation
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required." });
    }

    try {
        // Check if user with the same email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already exists." });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user instance
        const user = new User({ email, password: hashedPassword });

        // Save the user to the database
        await user.save();

        // Respond with success
        res.status(201).json(user);
    } catch (error) {
        // Log the error
        console.error("Error creating user:", error);
        // Respond with an error message
        res.status(500).json({ message: "An error occurred while creating the user." });
    }
};

module.exports = createUser;
