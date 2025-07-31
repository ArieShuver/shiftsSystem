import { Injectable } from '@nestjs/common';
import { User } from './userModle';  // בדוק שהנתיב נכון
import DbService from 'src/db/db.service';

@Injectable()
export class UsersService {
  constructor(private dbService: DbService) {}

  async getAllUsers(): Promise<User[]> {
    return await this.dbService.findAll();
  }

  async addUser(user: User): Promise<User> {
    return await this.dbService.create(user);
  }

  async findUser(id: number): Promise<User | null> {
    return await this.dbService.findById(id);
  }
}
