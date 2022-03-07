
const express = require("express");
const { 
    getGoals, 
    setGoal, 
    updateGoal, 
    deleteGoal } = require("../controllers/goalController");
const { requiredSigin } = require("../middlewares/authMiddleware");
const router = express.Router();


router.route("/").get(requiredSigin,getGoals).post(requiredSigin,setGoal);
router.route("/:id").put(requiredSigin,updateGoal).delete(requiredSigin,deleteGoal);



module.exports = router;