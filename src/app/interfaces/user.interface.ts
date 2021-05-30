export interface UpdateUserInput {
  readonly name?: string
    readonly username?: string
    readonly email?: string
    readonly birthday?: Date
    readonly profile_photo?: string
    readonly biography?: string
    readonly password?: string
    readonly social_networks?: {
      readonly facebook?: string,
      readonly instagram?: string,
      readonly twitter?: string,
      readonly youtube?: string,
      readonly linkedin?: string
    }
}

export interface SearchUserInput {
    readonly _id?: string
    readonly skip?: number
    readonly limit?: number
    readonly name?: string
    readonly username?: string
    readonly email?: string
    readonly birthday_min?: Date
    readonly birthday_max?: Date
}
