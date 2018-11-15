import * as passport from 'passport';
import * as mongoose from 'mongoose'
import * as bcrypt from 'bcrypt'

const User = mongoose.model('users');

export const login = async (
  parent, 
  { 
    email, 
    password 
  }, 
  ctx,
  info
) => {
  return new Promise((resolve, reject) => {
    passport.authenticate('local-login', (err, user, info) => {
      if (!user) {
        reject(info);
      }
      return ctx.req.logIn(user, error => {
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
  ctx,
  info
)  => {
  const existingUser = User.find({ email })
  if (existingUser) {
    throw new Error('This email already exists!')
  }

  const user = await User.create({
    firstName,
    lastName,
    email,
    password: bcrypt.hashSync(password, 10)
  })

  console.log('ISERRRURURUWEIHKEHJFSHJKDFJKHSDFJKHDSHJKDSFSD', user)

  return user

  // return await passport.authenticate('local-signup', (err, user, info) => {
  //   if (!user) {
  //     console.error(info)
  //   }
  //   return ctx.req.logIn(user, error => {
  //     if (err) {
  //       console.error(err)
  //     }
  //     return user
  //   }); 
  // })({body: {firstName, lastName, email, password}});
}