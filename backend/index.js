
const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

const app = express();

const LOCAL_PORT = 3002;
const PORT = process.env.PORT || LOCAL_PORT;
const url = process.env.MONGO_URI;



















// =====================  Connect to MongoDB and server  =======================

mongoose
  .connect(url)
  .then(() => {
    console.log("MongoDB connected successfully");

    // Start the server after database connection
    app.listen(PORT, () => {
      console.log(`Server started successfully on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err.message);
  });
