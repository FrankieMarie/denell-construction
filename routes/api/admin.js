const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

// Model
const Admin = require('../../models/Admin');

// @route GET api/admin/test
// @description tests admin route
// @access PUBLIC
router.get('/test', (req, res) => res.json({ msg: "admin works" }));

// @route POST api/admin/register
// @description Register admin
// @access PUBLIC
router.post('/register', (req, res) => {
  Admin.findOne({ email: req.body.email })
    .then(admin => {
      if(admin) {
        return res.status(400).json({ email: 'Email already exists' });
      } else {
        const newAdmin = new Admin({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
        });
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newAdmin.password, salt, (err, hash) => {
            if(err) throw err;
            newAdmin.password = hash;
            newAdmin.save()
              .then(admin => res.json(admin))
              .catch(err => console.log(err));
          });
        });
      }
    });
});

// @route POST api/admin/login
// @description Login admin
// @access PUBLIC
router.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  Admin.findOne({ email })
    .then(admin => {
      if(!admin) {
        return res.status(404).json({ error: 'Credentials are incorrect' });
      }
      bcrypt.compare(password, admin.password)
        .then(isMatch => {
          if(isMatch) {
            const payload = {
              id: admin._id,
              name: admin.name,
              email: admin.email
            };
            jwt.sign(
              payload,
              keys.secretOrKey,
              { expiresIn: '7d'},
              (err, token) => {
                res.json({
                  success: true,
                  token: 'Bearer ' + token
                });
              }
            );
          } else {
            return res.status(400).json({ error: 'Credentials are incorrect' });
          }
        });
    });
});

// @route GET api/admin/current
// @description gets logged in admin
// @access PRIVATE
router.get('/current',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
  res.json({
    id: req.admin.id,
    name: req.admin.name,
    email: req.admin.email
  });
});

module.exports = router;