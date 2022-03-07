const asyncHandler = require("express-async-handler");
const { resultsValidator } = require("../validators/appValidator");
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
    res.status(200).json("register User");
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