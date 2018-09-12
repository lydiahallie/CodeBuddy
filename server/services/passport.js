const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
// const passportJWT = require('passport-jwt');
const bcrypt = require('bcrypt');
// const keys = require('../config/keys');

// const JWTStrategy = passportJWT.Strategy;
// const ExtractJWT = passportJWT.ExtractJwt;

const User = mongoose.model('users');

passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  if (user) return done(null, user);

  return null;
});

/*
passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true,
  }, async (accessToken, refreshToken, profile, done) => {
    const user = await User.findOne({ email: profile.email });
    if (user) return done(null, user);
    const newUser = await new User({
      userName: profile.displayName,
      firstName: profile.name.givenName,
      lastName: profile.name.familyName,
      img: profile.photos[0].value.split('sz=50').join('sz=150'),
      email: profile.email,
      gender: profile.gender,
    }).save();
    newUser => done(null, newUser);
  }),
);
*/


passport.use('local-signup', new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
  }, async (req, email, password, done) => {
    const { userName, firstName, lastName } = req.body;
    try {
      const user = await User.findOne({ email });
      if (user) return done(null, false, 'This emailId is already taken.');
    } catch (e) {
      return done(e);
    }
    try {
      const newUser = await new User({
        email,
        password: bcrypt.hashSync(password, 10),
        userName,
        firstName,
        lastName,
      }).save();
      return done(null, newUser);
    } catch (e) {
      return done(e);
    }
  },
));

passport.use('local-login', new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
  }, async (req, email, password, done) => {
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return done(null, false, 'Invalid Username');
      }
      if (!bcrypt.compareSync(password, user.password)) {
        return done(null, false, 'Wrong Password');
      }
      return done(null, user);
    } catch (e) {
      return done(e);
    }
  },
));
