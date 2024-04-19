const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDb = require("./config/connectDb");
const userRouter = require("./routes/userRoutes");
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

connectDb()
  .then(() => {
    // Create an HTTP server
    let server = http.createServer(app);

    // Listen to the PORT
    server.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Invalid database connection...!");
  });
// Define routes
// app.route('/').get(home);
// app.use('/api/v1/mentors',mentorRouter);
app.use('/api/v1/users',userRouter);
