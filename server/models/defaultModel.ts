interface Skill {
  lang: string
  value: number
}

interface UserModel {
  firstName: string
  lastName: string
  userName: string
  img: string
  title: string
  skills: Skill[]
  level: string
  description: string
}

export const DEFAULT_USER_MODEL = {
  firstName: 'Default',
  lastName: 'Name',
  userName: 'username',
  img: 'http://fuuse.net/wp-content/uploads/2016/02/avatar-placeholder.png',
  title: 'Awesome Developer',
  skills: [
    { lang: 'Language1', value: 50 },
    { lang: 'Language2', value: 40 },
    { lang: 'Language3', value: 30 },
  ],
  level: 'Beginner',
  description:
    'This is the default description for new users. Please update this to your own original bio!',
} as UserModel;
