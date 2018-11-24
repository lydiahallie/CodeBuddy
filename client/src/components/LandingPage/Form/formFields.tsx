interface AuthField {
  type: string 
  placeholder: string
}

interface Word {
  word: string
  color: string
}

export const LOGIN_FIELDS: AuthField[] = [
  // { type: 'text', placeholder: 'Name' },
  { type: 'text', placeholder: 'Email' },
  { type: 'password', placeholder: 'Password' },
];

export const SIGNUP_FIELDS: AuthField[] = [
  { type: 'text', placeholder: 'First Name' },
  { type: 'text', placeholder: 'Last Name' },
  { type: 'text', placeholder: 'Email' },
  { type: 'password', placeholder: 'Password' },
];

export const WORDS: Word[] = [
  { word: 'Code', color: '#00b496' },
  { word: 'Design', color: '#00b496' },
  { word: 'Hack', color: '#00b496' },
  { word: 'Brainstorm', color: '#00b496' },
];
