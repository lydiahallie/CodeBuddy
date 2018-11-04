export interface Skill {
  lang: string 
  value: number
}

interface UserProfile {
  id: string
  userName: string
  img: string
  title: string
  skills: Skill[]
  level: string
  description: string
}

export interface User {
  id: string
  profile: UserProfile
  firstName: string
  lastName: string
}
