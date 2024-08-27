const User = require("../models/User.js");
const createAsync = require("../utils/createAsync.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const signup = createAsync(async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const profileImage = req.file;

  if (!profileImage) {
    return res.status(400).send("No file uploaded");
  }

  const profileImagePath = profileImage.path;
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(409).json({ message: "User already exists!" });
  }

  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = new User({
    firstName,
    lastName,
    email,
    password: hashedPassword,
    profileImagePath,
  });

  await newUser.save();

  res
    .status(200)
    .json({ message: "User registered successfully!", user: newUser });
});
const login = createAsync(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(409).json({ message: "User does not exist" });
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid Credientials" });
  }
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  delete user.password;
  res.status(200).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
});
module.exports = {
  signup,
  login,
};
