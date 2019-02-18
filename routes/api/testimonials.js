const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

// Model
const Testimonial = require('../../models/Testimonial');

// @route GET api/testimonials/all
// @description fetch all testimonials
// @access PUBLIC
router.get('/all', (req, res) => {
  Testimonial.find()
  .then(testimonials => {
    res.json(testimonials)
  })
  .catch(err => res.status(500).json({error: err}))
});

// @route POST api/testimonials/new
// @description post a new testimonial
// @access PRIVATE
router.post('/new', (req, res) => {
  const newTestimonial = new Testimonial({
    author: req.body.author,
    title: req.body.title,
    body: req.body.body,
  });
  newTestimonial.save()
    .then(testimonial => res.json(testimonial))
    .catch(err => console.log(err));
});

module.exports = router;