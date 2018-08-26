const passport = require('passport'),
      GoogleStrategy = require('passport-google-oauth20').Strategy,
      LocalStrategy = require('passport-local').Strategy,
      keys = require('../config/keys'),
      mongoose = require('mongoose'),
      passportJWT = require('passport-jwt'),
      JWTStrategy   = passportJWT.Strategy,
      bcrypt = require('bcrypt'),
      ExtractJWT = passportJWT.ExtractJwt;

const User = mongoose.model('users');

passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser( async (id, done) => {
  const user = await User.findById(id);
  if (user) return done(null, user);
})

passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true,
  }, async (accessToken, refreshToken, profile, done) => {
    const user = await User.findOne({ 'email': profile.email });
    if (user) return done(null, user);
    const newUser = 
      await new User({ 
        userName: profile.displayName,
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        img: profile.photos[0].value.split('sz=50').join('sz=150'),
        email: profile.email,
        gender: profile.gender,
      }).save();
    newUser => done(null, newUser);
  }
));


passport.use(new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
  }, async (req, email, password, done) => {
    console.log('Being called now')
    const { userName, firstName, lastName } = req.body;
    try {
      const user = await User.findOne({ 'email': email })
      if (user) return done(null, user);
      const newUser = await new User({ 
        email, 
        password: bcrypt.hashSync(password, 10),
        userName, 
        firstName, 
        lastName 
      }).save();
      newUser => done(null, newUser)
    } catch (e) {
      console.log("Error: ", e)
    }
  }
));