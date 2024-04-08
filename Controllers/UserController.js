const User = require("../Models/UserModel");

// Controller function to create a new user
const createUser = async (req, res) => {
    
    try {
        const user = await User.create(req.body);
        res.status(201).json({ success: true, data: user });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Controller function to delete a user by ID
const deleteUserById = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ success: false, error: 'User not found' });
        }
        res.json({ success: true, data: {} });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Controller function to fetch user data by ID
const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ success: false, error: 'User not found' });
        }
        res.json({ success: true, data: user });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Controller function to delete multiple users by IDs
const deleteMultipleUsers = async (req, res) => {
    try {
        const ids = req.body.ids;
        const result = await User.deleteMany({ _id: { $in: ids } });
        res.json({ success: true, data: result });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

const updateUserById = async (req, res) => {
    try {
        const { id } = req.params;   // Extract user ID from request parameters
        const userData = req.body; // Extract updated user data from request body

        // Find the user by ID and update their information
        const user = await User.findByIdAndUpdate(id, userData, { new: true });

        // Check if user exists
        if (!user) {
            return res.status(404).json({ success: false, error: 'User not found' });
        }

        // Respond with success message and updated user data
        res.json({ success: true, data: user });
    } catch (error) {
        // Handle error
        res.status(500).json({ success: false, error: error.message });
    }
};

const getAllData = async (req, res) => {
    try{
        const getalldata = await User.find({})
        res.status(200).json(getalldata)

    }catch(error) {
        res.status(500).json({ success : false , error : error.message})
    }
}


module.exports = {
    createUser,
    deleteUserById,
    getUserById,
    deleteMultipleUsers,
    updateUserById,
    getAllData
};
