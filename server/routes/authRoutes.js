const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

module.exports = () => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    }),
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => res.redirect('/dashboard'),
  );

  app.get('/api/logout', (req, res) => {
    req.logOut();
    res.redirect('/');
  });

  app.post(
    '/api/userauth',
    passport.authenticate('local'),
    (req, res) => {
      res.send('Done');
    },
  );
};
