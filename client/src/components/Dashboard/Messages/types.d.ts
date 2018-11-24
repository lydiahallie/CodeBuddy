import { User } from '../Find/types';

export interface Message {
  id: string
  author: User
  recipientUserId: string
  body: string
}