const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

// Import the connection function from db.js
const connections = require("./db");

// Connect to the database
connections();

// MIDDLEWARE
app.use(morgan('dev'));  // For logging HTTP requests
app.use(bodyParser.json({ limit: "5mb" }));  // Parse incoming JSON requests
app.use(bodyParser.urlencoded({ limit: "5mb", extended: true }));  // Parse URL-encoded data
app.use(cookieParser());  // To parse cookies
app.use(cors());  // To handle cross-origin requests

// Deined ROutes here 
const authRoutes = require('./routes/authRoutes');
const quizRoutes = require('./routes/quizRoutes');


app.use('/user', authRoutes);
app.use('/quiz',  quizRoutes);


// Start the server
const port = process.env.PORT || 9000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
