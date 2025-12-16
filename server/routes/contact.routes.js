const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact.model');


router.post('/', async (req, res) => {
  const newMessage = new Contact({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message
  });

  try {
    const savedMessage = await newMessage.save();
    res.status(201).json({ message: "Message sent successfully!" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;