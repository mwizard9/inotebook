const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs')
const { body, validationResult } = require('express-validator');

//Create a User using : POST "/api/auth/createUser". Doesn't require Auth
router.post('/createUser', [
  body('email', 'Enter a valid name').isEmail(),
  body('name', 'enter a valid email').isLength({ min: 3 }),
  body('password', 'Password must be at least five charecters').isLength({ min: 5 }),
],
  async (req, res) => {
    //If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //check weather the user with this email exists already
    try {

      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({ error: "sorry a user with this email already exists" });
      }
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password,salt);

      user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email
      })
      res.json({ user });

      //.then(user => res.json(user))
      //.catch(err=> {console.log(err)
      //res.json({error: 'Please enter a unique email ID',message:err.message})})
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some error occure")
    }
  },
);


module.exports = router