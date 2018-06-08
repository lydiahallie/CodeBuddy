const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const User = mongoose.model('users');

module.exports = app => {
  app.get(
    '/auth/google', 
    passport.authenticate('google', { 
      scope: ['profile', 'email']
    })
  );

  app.get('/dashboard/dashboard', (req, res) => {
    res.send(req.body)
  })

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => res.redirect('/dashboard')
  );

  app.get('/api/logout', (req, res) => {
    req.logOut();
    res.redirect('/');
  });
  
  app.post(
    '/api/userauth',
    passport.authenticate('local'),
    (req, res) => res.redirect('/dashboard/dashboard')
  );
}