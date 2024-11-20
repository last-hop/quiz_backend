const mongoose = require('mongoose');

module.exports = async () => {
    try {
        // Await the connection and ensure the environment variable is correctly set
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,        // Parses connection strings properly
            useUnifiedTopology: true,
            connectTimeoutMS: 10000, // 10 seconds
            socketTimeoutMS: 45000, // 45 seconds   // Ensures modern MongoDB driver features
        });
        console.log("Connected to database successfully");
    } catch (error) {
        console.error("Could not connect to database:", error.message);  // Log meaningful error message
        process.exit(1);  // Exit the process if the database connection fails
    }
};
