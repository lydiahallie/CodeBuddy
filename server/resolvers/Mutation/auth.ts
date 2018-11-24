import * as passport from 'passport';
import * as mongoose from 'mongoose'
import * as bcrypt from 'bcrypt'
import * as jsonwebtoken from 'jsonwebtoken'

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

  console.log('whats email etc', email)

  const user = await User.findOne({ where: { email } })

  console.log('===')
  console.log('===')
  console.log('===')
  console.log('===')
  console.log(user)
  console.log('===')
  console.log('===')
  console.log('===')
  console.log('===')

  if (!user) {
    throw new Error('No user with that email')
  }

  const valid = await bcrypt.compare(password, user.password)

  if (!valid) {
    throw new Error('Incorrect password')
  }

  return user
  // return json web token
  // return jsonwebtoken.sign(
  //   { id: user.id, email: user.email },
  //   'ey8e288fjsk1i90kl',
  //   { expiresIn: '1d' }
  // )
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
  const existingUser = await User.findOne({ where: { email } })

  if (existingUser) {
    throw new Error('There is already a user with this email address.')
  }

  const user = await User.create({
    firstName,
    lastName,
    email,
    password: bcrypt.hashSync(password, 10)
  })

  console.log('===')
  console.log('===')
  console.log('===')
  console.log('===')
  console.log(user)
  console.log('===')
  console.log('===')
  console.log('===')
  console.log('===')

  return user
}