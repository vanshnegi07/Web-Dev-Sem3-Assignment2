const express = require("express");
const logger = require("./middleware/logger");
const studentRoutes = require("./routes/studentRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// Parse JSON request bodies
app.use(express.json());

// Custom logger middleware (runs on every request)
app.use(logger);

// Modular routing — all student endpoints live under /students
app.use("/students", studentRoutes);

// Catch-all for undefined routes
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Generic error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
