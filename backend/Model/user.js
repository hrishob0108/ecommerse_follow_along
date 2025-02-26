const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minLength: 4 },
  phoneNumber: { type: Number },
  address: [
    {
      country: { type: String },
      city: { type: String },
      address1: { type: String },
      address2: { type: String },
      zipcode: { type: Number },
      addressType: { type: String },
    },
  ],
  role: { type: String, default: "user" },
  avatar: {
    id: { type: String, required: false },
    url: { type: String, required: false },
  },
  createdAt: { type: Date, default: Date.now },
});



// Generate JWT token
userSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES, // Corrected from "expiration" to "expiresIn"
  });
};

// Compare passwords
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password); // Fixed incorrect field name
};

module.exports = mongoose.model("User", userSchema);
