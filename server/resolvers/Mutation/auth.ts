import passport from 'passport';

export const auth = {
  async login(
    parent, 
    { 
      email, 
      password 
    }, 
    req
  ) {
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
    }) as Promise<void>;
  },

  async logout(parent, args, req) {
    new Promise(resolve => {
      req.logOut();
      resolve();
    }) as Promise<void>;
  },

  async signup(
    parent, 
    { 
      firstName, 
      lastName, 
      email, 
      password 
    }, 
    req
  ) {
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
    }) as Promise<void>;
  }
}