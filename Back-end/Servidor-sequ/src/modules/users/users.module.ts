import { Router } from 'express';
import UsersRoute from './routes/users.route';

class UserModule {

    public routes: Router;

    public constructor() {
        this.routes = Router();
        this.routes.use('/users', UsersRoute);
    }
}

export default new UserModule();