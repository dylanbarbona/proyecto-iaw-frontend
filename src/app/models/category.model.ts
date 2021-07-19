export interface Category {
  _id: string
  name: string
  description: string
}

export class EmptyCategory implements Category {
  _id: string = ''
  name: string = ''
  description: string = ''
}
