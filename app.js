
const express = require("express");

const app = express();

const logger = require("./middleware/logger");
const studentRoutes = require("./routes/studentRoutes");

// Middleware
app.use(express.json());
app.use(logger);

// Routes
app.use("/students", studentRoutes);

// Home route
app.get("/", (req, res) => {
    res.send("Student Management API is running");
});

// 404 error handler
app.use((req, res) => {
    res.status(404).json({
        message: "Route not found"
    });
});

// Start server
const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});  
