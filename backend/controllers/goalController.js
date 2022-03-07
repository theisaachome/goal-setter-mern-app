
const asyncHandler = require('express-async-handler')
const Goal = require("../models/goal");
const { resultsValidator } = require('../validators/appValidator');
// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler(async(req,res,next)=>{
    const goals = await Goal.find();
    res.status(200).json(goals)
})

// @desc    Set goal
// @route   POST /api/goals
// @access  Private
const setGoal = asyncHandler(async(req,res,next)=>{
    const errors = resultsValidator(req)
  if (errors.length > 0) {
    return res.status(400);
    throw new Error(errors[msg]);
  }
    const goal = await Goal.create({
        text:req.body.text,
        description:req.body.description,
        typeOfGoal:req.body.typeOfGoal,
        goalStatus:req.body.goalStatus,
    })
    res.status(200).json(goal);
})

// @desc    Update goal
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = asyncHandler(async(req,res,next)=>{
    const goal = await Goal.findById(req.params.id);
    if(!goal){
        throw new Error("No goal with given id",req.params.id);
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.status(200).json(updatedGoal);
})
// @desc    Delete goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal =asyncHandler(async(req,res,next)=>{
    const goal = await Goal.findByIdAndDelete(req.params.id);
    if(!goal){
        throw new Error("No goal with given id",req.params.id);
    }
    res.status(200).json({id:req.params.id});
})
module.exports={
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}