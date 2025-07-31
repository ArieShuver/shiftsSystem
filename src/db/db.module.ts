import { Module } from '@nestjs/common';
import sequelize from './db.config';
import { User } from './modle/userModle';
import { Shift } from './modle/shiftModle';
import { Assignment } from './modle/assignmentModle';
import DbService from './db.service';

@Module({
    providers: [DbService,
        {
            provide: 'SEQUELIZE',
            useFactory: async () => {
                try {
                    await sequelize.authenticate();
                    console.log(' Connection to database has been established successfully.');
                    await User.sync();
                    await Shift.sync();
                    await Assignment.sync();
                    console.log(' Models synced successfully.');
                } catch (error) {
                    console.error(' Unable to connect to the database:', error);
                }

                return sequelize;
            },
        },
    ],
    exports: ['SEQUELIZE', DbService],
})
export class DbModule { }
