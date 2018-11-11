import * as passport from 'passport';

export const login = async (
  parent, 
  { 
    email, 
    password 
  }, 
  req
) => {
  return new Promise((resolve, reject) => {
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
}

export const logout = async(parent, args, req) => {
  return new Promise(resolve => {
    req.logOut();
    resolve();
  }) as Promise<void>;
}

export const signup = async(
  parent, 
  { 
    firstName, 
    lastName, 
    email, 
    password 
  },
  req
)  => {
  return await passport.authenticate('local-signup', (err, user, info) => {
    console.log("====")
    console.log("====")
    console.log("====")
    console.log(user)
    console.log("====")
    console.log("====")
    console.log("====")
    console.log("====")
    if (!user) {
      console.error(info)
    }
    return req.logIn(user, error => {
      if (err) {
        console.error(err)
      }
      return user
    }); 
  })({body: {firstName, lastName, email, password}});
}