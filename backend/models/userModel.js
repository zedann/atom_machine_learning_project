const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please tell us your name"]
  },
  slug: {
    type: String,
    lowercase: true
  }
  ,
  email: {
    type: String,
    required: [true, "Please tell us your email"],
    unique: true,
    lowercase: true,
    trim: true,
    validate: [],
  },
})

const User = mongoose.model("User", userSchema);

module.exports = User;
