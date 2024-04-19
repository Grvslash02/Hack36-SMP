const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");

const http = require("http");

// Configure dotenv
dotenv.config();

// Create an express app
const app = express();

// Use middleware
app.use(morgan("dev"));
app.disable("x-powered-by");
app.use(express.json());
app.use(cors());


// Define PORT
const PORT = process.env.PORT || 5000;

let server = http.createServer(app);

// Listen to the PORT
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Define routes
app.get("/", (req, res) => {
  res.status(201).json("Home GET Request");
});