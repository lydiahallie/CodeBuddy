const passport = require('passport');

const logout = ({ req }) => (
  new Promise(resolve => {
    req.logOut();
    resolve();
  })
)

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

module.exports = {login, signup, logout};
