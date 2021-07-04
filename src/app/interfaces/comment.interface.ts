export interface CreateCommentInput {
  user: string
  text: string
  post: string
}

export interface SearchCommentInput {
  _id?: string
  user?: string
  createdAt_max?: Date
  createdAt_min?: Date
  updatedAt_max?: Date
  updatedAt_min?: Date
  limit?: number
  skip?: number
}

export interface UpdateCommentInput {
  text: string
}
