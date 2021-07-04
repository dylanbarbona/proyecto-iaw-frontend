export interface User {
  username: string
  name: string
  email: string
  password?: string
  birthday?: Date
  profile_photo?: string
  biography?: string
  social_networks?: {
    facebook?: string,
    instagram?: string,
    twitter?: string,
    youtube?: string,
    linkedin?: string
  }
  followers?: User[] | string[]
  followings?: User[] | string[]
  google_login?: boolean
  facebook_login?: boolean
}

export class EmptyUser implements User {
  username: string = '';
  name: string = '';
  email: string = '';
  password?: string;
  birthday?: Date;
  profile_photo?: string;
  biography?: string;
  social_networks?: { facebook?: string; instagram?: string; twitter?: string; youtube?: string; linkedin?: string; };
  followers?: User[] | string[];
  followings?: User[] | string[];
  google_login?: boolean;
  facebook_login?: boolean;

}
