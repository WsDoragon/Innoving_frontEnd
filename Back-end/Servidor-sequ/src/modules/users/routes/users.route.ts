import { Router } from 'express';
import UserController from '../controllers/users.controllers';

class UsersRoute {

    public router: Router;

    constructor() {
        this.router = Router();
        this.router.post('/', UserController.addUser);
        this.router.get('/', UserController.getUsers);
        this.router.get('/search', UserController.searchUsers);
        this.router.get('/:id', UserController.getUser);
    }
}

export default new UsersRoute().router;