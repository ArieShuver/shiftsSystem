import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from "./users.service"
import { DbModule } from 'src/db/db.module';
import DbService from 'src/db/db.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, DbModule,DbService],
  exports: [UsersService] 

})
export class UsersModule { }
