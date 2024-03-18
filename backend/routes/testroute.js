
const express = require ('express');
const router = express.Router();

const cors = require('cors')
router.use(cors());
const User = require("../model/testmodel");
const { createSecretToken } = require("../model/secret");
const bcrypt = require("bcryptjs");


router.post('/data', async (req, res, next) => {
  try {
    const { email, password, username, createdAt } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await User.create({ email, password, username, createdAt });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user });
    next();
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;