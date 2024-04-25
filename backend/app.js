const express = require("express");
const globalError = require('./middlewares/errorMiddleware')
const hpp = require("hpp");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const compression = require("compression");
const app = express();
const cors = require("cors");
// **routes
const userRoutes = require("./routes/userRoutes");
// **middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log(`Mode : ${process.env.NODE_ENV}`);
}
// parse request body
app.use(express.json(limit = "20kb"));

// enable cors
app.use(cors());

// compress response body
app.use(compression());

const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour!",
})
// limit request
app.use("/api", limiter);


// prevent http param pollution
// TODO: add whitelist
app.use(hpp());

// **end points
app.use("/api/v1/users", userRoutes);



// **error handler

app.all('*', (req, res, next) => {
  next(new ApiError(`Can't find this route: ${req.originalUrl}`, 400));
});

// Global error handling middleware for express
app.use(globalError);
module.exports = app;
