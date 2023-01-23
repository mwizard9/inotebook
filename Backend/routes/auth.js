const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const fetchuser = require('../middleware/fetchuser');
const JWT_SECRET = 'manishhimalayaia@stude$nt';

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
      const secPass = await bcrypt.hash(req.body.password, salt);

      user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email
      })
      const data = {
        user: {
          id: user.id
        }
      }
      const jwtData = jwt.sign(data, JWT_SECRET);
      res.json({ jwtData })

      //.then(user => res.json(user))
      //.catch(err=> {console.log(err)
      //res.json({error: 'Please enter a unique email ID',message:err.message})})
    } catch (error) {
      console.error(error.message);
      res.status(500).send("internal server error")
    }
  },
);

//authenticate a User using : POST "/api/auth/login". Doesn't require Auth
router.post('/login', [
  body('email', 'enter a valid email').isEmail(),
  body('password', 'Password cannot be blank').exists(),
],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {email, password} = req.body;

    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ error: "Please try to login with correcct credential" })
      }

      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res.status(400).json({ error: "Please try to login with correct credential" })
      }
      const data = {
        user: {
          id: user.id
        }
      }
      const jwtData = jwt.sign(data, JWT_SECRET);
      res.json({ jwtData })
    }
    catch (error) {
      console.error(error.message);
      res.status(500).send("internal server error")
    }
  })

//Route 3:Get logged in user details ising POST"api/auth/getuser".login required 
router.post('/getuser',fetchuser, async (req, res) => {
try {
  userId ="todo"
  const user = await User.findById(userId).select("-password")
}
  
  catch (error) {
    console.error(error.message);
    res.status(500).send("internal server error")
  }
})
module.exports = router