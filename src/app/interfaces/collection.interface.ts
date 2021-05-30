export interface CreateCollectionInput {
    user: string
    posts: string[]
}

export interface SearchCollectionInput {
    _id?: string
}

export interface UpdateCollectionInput {
    post: string
}
