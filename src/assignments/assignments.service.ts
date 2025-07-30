import { Injectable } from '@nestjs/common';
import { Assignments } from './assignmentsModel';

let assignments: Array<Assignments> = []

@Injectable()
export class AssignmentsService {
  getAllAssignments(): Array<object> {
    return assignments;
  }

  addAssignment(assignment: Assignments) {
    assignments.push(assignment);
  }

  async findAssignment(id: number) {
    return assignments.find(assignment => assignment.id === id);
  }
}
