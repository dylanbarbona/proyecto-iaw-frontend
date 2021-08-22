import { Register } from "./register.interface"

export interface Auth {
  email: string,
  password: string
}

export class EmptyAuth implements Auth, Register {
  private static instance: EmptyAuth;

  private constructor(){}

  public static getInstance(){
    if(!this.instance)
      this.instance = new EmptyAuth()
    return this.instance
  }

  username = ''
  password = ''
  name = ''
  email = ''
  birthday = new Date()
}
