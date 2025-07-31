    import { Controller, Get, Post ,Body} from '@nestjs/common';
    import { AssignmentsService } from './assignments.service';
    import { Assignments } from './assignmentsModel';

    @Controller('assignments')
    export class AssignmentsController {
        constructor(private readonly assignmentsService: AssignmentsService) { }

        getAllAssignments() {
            return this.assignmentsService.getAllAssignments();
        }

        addAssignment(@Body() assignment: Assignments) {
            this.assignmentsService.addAssignment(assignment);
            return "Assignment added";
        }
    }       