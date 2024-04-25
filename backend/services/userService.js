const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

exports.createUser = asyncHandler(async (req, res, next) => {
  const user = await User.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      user
    }
  })
})
