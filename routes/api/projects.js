const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const multer = require('multer');

// Model
const Project = require('../../models/Project');

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

// @route GET api/projects/test
// @description tests admin route
// @access PUBLIC
router.get('/test', (req, res) => res.json({ msg: "projects works" }));

// @route GET api/projects/all
// @description tests admin route
// @access PUBLIC
router.get('/all', (req, res) => {
  Project.find()
  .then(projects => {
    res.json(projects)
  })
  .catch(err => res.status(500).json({error: err}))
});

// @route GET api/projects/:id
// @description Get a project by id
// @access PUBLIC
router.get('/:id', (req, res) => {
  Project.findById({ _id: req.params.id })
  .then(project => {
    res.json(project)
  })
  .catch(err => res.status(500).json({error: err}))
});

// @route POST api/projects/new
// @description tests admin route
// @access PRIVATE
router.post('/new', upload.single('defaultImage'), (req, res) => {
  Project.findOne({ title: req.body.title })
    .then(project => {
      if(project) {
        return res.status(400).json({ error: 'Project title already exists' });
      } else {
        const newProject = new Project({
          title: req.body.title,
          defaultImage: req.file.path,
        });
        newProject.save()
          .then(project => res.json(project))
          .catch(err => console.log(err));
      }
    });
});

module.exports = router;