import { Controller,Get,Post } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {
        constructor(private readonly AppService: UsersService) { }

}
