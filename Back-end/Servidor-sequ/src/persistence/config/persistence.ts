import { Dialect, Sequelize } from 'sequelize'
import UserModel from '../models/user.model'
import dotenv from 'dotenv'

class Persistence {

    public persistence: any;
    public production: boolean = false;

    constructor() {
        dotenv.config();
        
        this.production = process.env.NODE_ENV === 'production'

        this.persistence = new Sequelize(
            <string> process.env.DB_NAME,
            <string> process.env.DB_USER,
            <string> process.env.DB_PASSWORD,
            {
                host: <string> process.env.DB_HOST,
                dialect: <Dialect> process.env.DB_DRIVER
            }
        );

        this.persistence.sync({alter: true}).then((result: any) => {
            console.log('synced');
        });


    }

}

export default new Persistence().persistence