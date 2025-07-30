export class Assignments {
    id: number;
    userId: number;
    shiftId: number;

    constructor(id: number, userId: number, shiftId: number) {
        this.id = id;
        this.userId = userId;
        this.shiftId = shiftId;
    }
}
