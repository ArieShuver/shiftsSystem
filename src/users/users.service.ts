import { Injectable } from '@nestjs/common';
import { User } from "./userModle"

let users: Array<User> = []

@Injectable()
export class UsersService {
  getAllUsers(): Array<object> {
    return users;
  }

  addUser(user: User) {
    users.push(user)
  }

  async findeUser(username: string) {
    return users.find(user => user.name === username)
  }
}


