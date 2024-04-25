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
  password: {
    type: String,
    required: [true, "Please enter a password"],
    minlength: 8
  },
  phone: String,
  passwordChangedAt: Date,
  passwordResetCode: String,
  passwordResetExpires: Date,
  role: {
    type: String,
    enum: ["user", "doctor", "admin"],
    default: "user"
  },
  active: {
    type: Boolean,
    default: true,
    select: false
  },

})

const User = mongoose.model("User", userSchema);

module.exports = User;
