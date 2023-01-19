const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

//Create a User using : POST "/api/auth/". Doesn't require Auth
router.post('/',[
   body('email','Enter a valid name').isEmail(),
   body('name','enter a valid email').isLength({ min: 3 }),
   body('password','Password must be at least five charecters').isLength({ min: 5 }),
],
(req,res)=>{
   const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    User.create({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email
    }).then(user => res.json(user))
    .catch(err=> {console.log(err)
   res.json({error: 'Please enter a unique email ID',message:err.message})})
  },
);
    

module.exports = router