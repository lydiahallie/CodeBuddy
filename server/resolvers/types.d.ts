export interface Request {
  req: any
}

interface Login {
  email: string
  password: string
  req: any
}

interface Signup extends Login {
  email: string
  password: string
  req: any
  firstName: string
  lastName: string
}

export interface NewMessage extends Request {
  id: string
  message: string
  req: any
}

export interface Message {
  author: User
  recipient: string
  body: NewMessage
}

interface Skill {
  lang: string
  value: number
}

export interface Profile {
  userName: string
  img: string
  title: string
  skills: Skill[]
  level: string
  description: string
  complete: boolean
}

export interface User {
  _id: string
  firstName: string
  lastName: string
  profile: Profile
}

interface PostContent {
  title: string
  body: string
}

export interface Post {
  author: User
  date: string
  post: PostContent
}