const mongoose = require('mongoose');

module.exports = () => {
    try {
        mongoose.connect(process.env.MONGO_URI);  // No need for deprecated options
        console.log("Connected to database successfully");
    } catch (error) {
        console.log(error);
        console.log("Could not connect to database!");
    }
};
