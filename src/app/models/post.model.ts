import { Category } from './category.model';
import { Metadata } from './metadata.model';
import { Like } from './like.model';
import { Comment } from './comment.model';
import { EmptyUser, User } from './user.model';

export interface Post {
  _id: string
  user: User
  categories: string[] | Category[]
  description: string
  metadata: Metadata[]
  comments: Comment[]
  likes: Like[]
}

export class EmptyPost implements Post {
  private static instance: Post;

  private constructor(){}

  public static getInstance(){
    if(!this.instance)
      this.instance = new EmptyPost()
    return this.instance
  }

  _id: string = '';
  user: User = EmptyUser.getInstance();
  categories: string[] | Category[] = [];
  description: string = '';
  metadata: Metadata[] = [];
  comments: Comment[] = [];
  likes: Like[] = [];
}
