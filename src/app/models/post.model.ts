import { Category } from './category.model';
import { Metadata } from './metadata.model';
import { Like } from './like.model';
import { User } from './user.model';

export interface Post {
  _id: string
  user: string | User
  categories: string[] | Category[]
  description: string
  metadata: Metadata[]
  comments: Comment[]
  likes: Like[]
}
