
const express = require("express");
const { registerUser, loginUser, getMe } = require("../controllers/userController");
const { requiredSigin } = require("../middlewares/authMiddleware");
const { registerValidator } = require("../validators/appValidator");
const router = express.Router();

router.post("/",registerValidator(),registerUser,)
router.post("/login",loginUser);
router.get("/me",requiredSigin,getMe);
module.exports = router;