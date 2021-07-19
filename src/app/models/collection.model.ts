export interface Collection {
  _id: string
  user: string
  posts: string[]
}

export class EmptyCollection implements Collection {
  _id: string = '';
  user: string = '';
  posts: string[] = [];
}
