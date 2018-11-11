import * as mongoose from 'mongoose'

const User = mongoose.model('users');

import { User as UserType } from '../types'

export const updateUser = async (
  parent, 
  { 
    email, 
    gender, 
    firstName, 
    lastName, 
  }, 
  req
) => {
  return new Promise(async(resolve, reject) => {
    try {
      const user = await User.findOne({ _id: req.user._id });
      const { profile } = user;
      user.update({
        profile,
        firstName,
        lastName,
        email,
        gender,
      });
      resolve();
    } catch(e) {
      reject(e);
    }
  }) as Promise<UserType>
};
