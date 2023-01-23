const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const { body, validationResult } = require('express-validator');
const Notes = require('../models/Notes');

// ROUTE 1:Get all the notes
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user });
        res.json(notes)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("internal server error")
    }


})

// ROUTE 2:add the notes
router.post('/addnotes', fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'enter a valid email').isLength({ min: 6 }),

], async (req, res) => {
    try {
        const { title, description, tag } = req.body;
        //If there are errors, return Bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const note = new Notes({
            title, description, tag, user: req.user.id

        })
        const saveNotes = await note.save();


        res.json(saveNotes)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("internal server error")
    }

})
module.exports = router