// signControllers.js
import asyncHandler from "../middleware/asyncHandler.js";
import Sign from "../models/signModel.js"; // Import the Sign model

// @desc    Create a new sign
// @route   POST /api/signs
// @access  Private/Admin
export const createSign = asyncHandler(async (req, res) => {
    // Extract data from the request body
    const { englishName, arabicName, imageURL } = req.body;
    // Create a new sign instance using the Sign model
    const newSign = new Sign({
        englishName,
        arabicName,
        imageURL,
    });

    // Save the sign to the database
    await newSign.save();

    // Respond with a success message and the created sign
    res.status(201).json({ message: "Sign Created", sign: newSign });
});

// @desc    Get all signs
// @route   GET /api/signs
// @access  Public
export const getSigns = asyncHandler(async (req, res) => {
    // Dummy response for getting all signs
    res.json({ message: "All signs data" });
});

// @desc    Get a sign by ID
// @route   GET /api/signs/:id
// @access  Public
export const getSignById = asyncHandler(async (req, res) => {
    // For now, just returning a dummy response
    const signId = req.params.id;
    res.json({ message: `Fetching sign with ID: ${signId}` });
});

// @desc    Update a sign
// @route   PUT /api/signs/:id
// @access  Private/Admin
export const updateSign = asyncHandler(async (req, res) => {
    // Dummy response for updating a sign
    res.json({ message: "Sign updated" });
});

// @desc    Delete a sign
// @route   DELETE /api/signs/:id
// @access  Private/Admin
export const deleteSign = asyncHandler(async (req, res) => {
    // Dummy response for deleting a sign
    res.json({ message: "Sign deleted" });
});
