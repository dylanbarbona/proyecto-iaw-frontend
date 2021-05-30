import { Metadata } from "../models/metadata.model";

export interface CreatePostInput{
    categories: string[]
    description: string
    files: string[]
}

export interface SearchPostInput {
    _id?: string
    user?: string
    categories?: string[]
    description?: string
    createdAt_max?: Date
    createdAt_min?: Date
    updatedAt_max?: Date
    updatedAt_min?: Date
    limit?: number
    skip?: number
}

export interface UpdatePostInput {
    addFiles?: string[]
    deleteFiles?: string[]
    deleteCategories?: string[]
    addCategories?: string[]
    description?: string
}
