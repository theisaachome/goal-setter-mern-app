
// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getGoals = (req,res,next)=>{
    res.status(200).json({message:"Get Goals..."})
}

// @desc    Set goal
// @route   POST /api/goals
// @access  Private
const setGoal = (req,res,next)=>{
    res.status(200).json({message:"Set Goals..."})
}

// @desc    Update goal
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = (req,res,next)=>{
    res.status(200).json({message:`update a Goals with ${req.params.id}`})
}
// @desc    Delete goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = (req,res,next)=>{
    res.status(200).json({message:`delete a Goals with ${req.params.id}`})
}
module.exports={
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}