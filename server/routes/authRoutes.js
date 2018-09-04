const passport = require('passport');

module.exports = app => {
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
