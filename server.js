const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Import routes
const userRoutes = require("./Routes/UserRoutes");

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB database named "mydatabase"
mongoose.connect("mongodb://127.0.0.1:27017/ContactManager", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Database connected"))
    .catch((err) => console.log(err));

// Use routes
app.use('/api', userRoutes); // Mount the user routes at /api

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
