const asyncHandler = require("express-async-handler");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const { resultsValidator } = require("../validators/appValidator");
const User = require("../models/user");

// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    })
  }
  
// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res,next) => {
    const errors = resultsValidator(req);
    console.log(errors);
    if (errors.length > 0) {
      res.status(400);
      throw new Error(errors[0]["msg"]);
    }
    const { username, email, password } = req.body;
      // Check if user exists
    const userExists = await User.findOne({ email })

    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

      // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

     // Create user
    const user = await User.create({
        username,
        email,
        password: hashedPassword,
    })

    if (user) {
        res.status(201).json({
          _id: user.id,
          username: user.username,
          email: user.email,
          token: generateToken(user._id),
        })
      } else {
        res.status(400)
        throw new Error('Invalid user data')
      }
});  

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    res.json({message:"login User"})
})

// @desc    Get user data
// @route   GET /api/users/me
// @access  Private
const getMe = asyncHandler(async (req, res) => {
    
    res.status(200).json({
        message:"Get Me"
    })
  })
  
module.exports ={
    registerUser,
    loginUser,
    getMe,
}