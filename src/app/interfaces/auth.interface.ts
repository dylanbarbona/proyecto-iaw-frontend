import { Register } from "./register.interface"

export interface Auth {
  username: string,
  password: string
}

export class EmptyAuth implements Auth, Register {
  username = ''
  password = ''
  name = ''
  email = ''
  birthday = new Date()
}
