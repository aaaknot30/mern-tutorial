const asyncHandler = require('express-async-handler')

// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler( async (req, res) => {
  res.status(200).json({ message: 'Get goals' })
})

// @desc    Set a  goals
// @route   POST /api/goals
// @access  Private
const setGoal = asyncHandler( async (req, res) => {
  console.log(req.body)
  if (!req.body.text) {
    throw new Error('Please add a text field')
  }
  res.status(200).json({ message: 'Set a goal' })
})

// @desc    Update goal
// @route   PUT /api/goal/:id
// @access  Private
const updateGoal = asyncHandler( async (req, res) => {
  res.status(200).json({ messaage: `Update goal ${req.params.id}` })
})

// @desc    Delete a goal
// @route   DELETE /api/goal/:id
// @access  Private
const deleteGoal = asyncHandler(  (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` })
})

module.exports =
{
  getGoals, 
  setGoal, 
  updateGoal, 
  deleteGoal
} 