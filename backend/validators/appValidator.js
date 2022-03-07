const {validationResult,check} = require('express-validator');

exports.resultsValidator = (req)=>{
    const messages = [];
    if (!validationResult(req).isEmpty()) {
        const errors = validationResult(req).array()
        for (const i of errors) {
          messages.push(i)
        }
    }
    return messages
}
exports.registerValidator = () => {
    return [
      check('username')
        .notEmpty()
        .withMessage('username is required')
        .not()
        .custom((val) => /[^A-za-z0-9\s]/g.test(val))
        .withMessage('Username not use uniq characters'),

      check("email")
        .isEmail()
        .notEmpty()
        .withMessage("email is required"),
        
      check('password')
        .notEmpty()
        .withMessage('password is required')
        .isLength({ min: 8 })
        .withMessage('Password must be 8 characters'),
    ]
  }

  exports.goalValidator = () => {
    return [
      check('text')
        .notEmpty()
        .withMessage('text is required')
        .not()
        .withMessage('text not use uniq characters')
        .isLength({ min: 10 })
        .withMessage('text must be 10 characters')
    ]
  }
  
  