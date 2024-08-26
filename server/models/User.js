const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please Provide first Name"],
  },
  lastName: {
    type: String,
    required: [true, "Please Provide last Name"],
  },
  email: {
    type: String,
    required: [true, "Please Provide email"],
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "Please Provide password"],
    minlength: 5,
    select: false,
  },
  profileImagePath: {
    type: String,
    default: "",
  },
  tripList: {
    type: Array,
    default: [],
  },
  wishList: {
    type: Array,
    default: [],
  },
  propertyList: {
    type: Array,
    default: [],
  },
  reservationList: {
    type: Array,
    default: [],
  },
}, {timestamps: true});

const User = mongoose.model("User", userSchema);
module.exports = User;
