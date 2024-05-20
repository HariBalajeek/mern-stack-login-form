const express = require('express');
const createUser = require('../controllers/logincontroller');

const router = express.Router();

// Define a POST route for handling user login
router.get('/', createUser)
router.post('/', createUser);

module.exports = router;
