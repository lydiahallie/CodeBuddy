const passport = require('passport');

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

  app.post(
    '/api/login',
    (req, res, next) => {
      passport.authenticate('local-login', (err, user, info) => {
        if (err) {
          return res.status(500).send({ error: err });
        }
        if (!user) {
          return res.status(400).send({ error: info });
        }
        
        return req.logIn(user, error => {
          if(error) {
            return res.send(500).send({error});
          }
          const {
            profile, firstName, lastName, _id, email, __v,
          } = user;
          return res.send({
            profile,
            firstName,
            lastName,
            _id,
            email,
            __v,
          });
        });
      })(req, res, next);
    }
  );

  app.post(
    '/api/signup',
    (req, res, next) => {
      passport.authenticate('local-signup', (err, user, info) => {
        if (err) {
          return res.status(500).send({ error: err });
        }
        if (!user) {
          return res.status(400).send({ error: info });
        }
        return req.logIn(user, error => {
          if(error) {
            return res.send(500).send({error});
          }
          const {
            profile, firstName, lastName, _id, email, __v,
          } = user;
          return res.send({
            profile,
            firstName,
            lastName,
            _id,
            email,
            __v,
          });
        });
      })(req, res, next);
    }
  );
};
