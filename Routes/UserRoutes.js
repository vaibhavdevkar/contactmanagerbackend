const express = require('express');
const router = express.Router();
const UserController = require('../Controllers/UserController');

// Route to create a new user
router.post('/users', UserController.createUser);

// Route to delete a user by ID
router.delete('/users/:id', UserController.deleteUserById);

// Route to fetch user data by ID
router.get('/users/:id', UserController.getUserById);

// Route to delete multiple users by IDs
router.delete('/users', UserController.deleteMultipleUsers);

// Route to fetch the data by ID and Update it
router.put('/users/:id', UserController.updateUserById);

// Route to fetch all data
router.get('/user/alldata', UserController.getAllData)

module.exports = router;
