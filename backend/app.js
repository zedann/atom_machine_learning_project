const express = require("express");
const app = express();

// routes

const userRoutes = require("./routes/userRoutes");

app.use(express.json());


// end points
app.use("/api/v1/users", userRoutes);

module.exports = app;
