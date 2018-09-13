const passport = require('passport');

/*
module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google'), (req, res) =>
    res.redirect('/dashboard')
  );

  app.get('/api/logout', (req, res) => {
    req.logOut();
    res.redirect('/');
  });
*/

const login = ({email, password, req}) => (
  new Promise((resolve, reject) => {
    passport.authenticate('local-login', (err, user, info) => {
      if (!user) {
        reject(info);
      }
      return req.logIn(user, error => {
        if (err) {
          return reject(error);
        }
        return resolve(user);
      });
    })({body: {email, password}});
  })
);


const signup = ({firstName, lastName, email, password, req}) => (
  new Promise((resolve, reject) => {
    passport.authenticate('local-signup', (err, user, info) => {
      if (!user) {
        reject(info);
      }
      return req.logIn(user, error => {
        if (err) {
          return reject(error);
        }
        return resolve(user);
      });
    })({body: {firstName, lastName, email, password}});
  })
);

module.exports = {login, signup};
