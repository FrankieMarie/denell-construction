const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const multer = require('multer');

// Model
const Image = require('../../models/Image');

// Multer storage config
const storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, 'uploads/')
  },
  filename: function(req, file, cb){
    cb(null, file.originalname)
  }
});

const upload = multer({storage: storage});

// @route GET api/images/test
// @description tests admin route
// @access PUBLIC
router.get('/test', (req, res) => res.json({ msg: "images works" }));

// @route GET api/images/all
// @description view all project images
// @access PUBLIC
router.get('/all', (req, res) => {
  Image.find()
  .then(images => {
    res.json(images)
  })
  .catch(err => res.status(500).json({error: err}))
});

// @route POST api/images/upload
// @description upload an image to a project
// @access PRIVATE
router.post('/upload', upload.single('path'), (req, res) => {
  Image.findOne({ path: req.body.path })
    .then(image => {
      if(image) {
        return res.status(400).json({ error: 'Image already exists' });
      } else {
        const newImage = new Image({
          path: req.file.path,
          project: req.body.project,
        });
        newImage.save()
          .then(image => res.json(image))
          .catch(err => console.log(err));
      }
    });
});

module.exports = router;