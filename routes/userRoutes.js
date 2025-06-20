const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// @route   GET /api/users
// @desc    Get all users
router.get("/users", userController.getAllUsers);

// @route   GET /api/users/:id
// @desc    Get a user by ID
router.get("/users/:id", userController.getUserById);

// @route   POST /api/users
// @desc    Create a new user
router.post("/users", userController.createUser);

// @route   PUT /api/users/:id
// @desc    Update a user by ID
router.put("/users/:id", userController.updateUser);

// @route   DELETE /api/users/:id
// @desc    Delete a user by ID
router.delete("/users/:id", userController.deleteUser);

module.exports = router;
