import { Connection } from "mongoose";
import { UserSchema } from "src/database/schemas/user.schema";


export const usersProviders = [
    {
        provide: 'USER_MODEL',
        useFactory: (connetion: Connection) => connetion.model('USER_MODEL',UserSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];