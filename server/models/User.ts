import * as mongoose from 'mongoose'
import { DEFAULT_USER_MODEL } from './defaultModel';

const userSchema = new mongoose.Schema({
  googleId: String,
  email: String,
  password: String,
  firstName: { type: String, default: DEFAULT_USER_MODEL.firstName },
  lastName: { type: String, default: DEFAULT_USER_MODEL.lastName },
  gender: String,
  profile: {
    userName: { type: String, default: DEFAULT_USER_MODEL.userName },
    img: { type: String, default: DEFAULT_USER_MODEL.img },
    title: { type: String, default: DEFAULT_USER_MODEL.title },
    skills: { type: Array, default: DEFAULT_USER_MODEL.skills },
    level: { type: String, default: DEFAULT_USER_MODEL.level },
    description: { type: String, default: DEFAULT_USER_MODEL.description },
    complete: { type: Boolean, default: false },
  },
});

export default mongoose.model('users', userSchema);
