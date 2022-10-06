import { User } from "../../entities/user";
import persistence from "../config/persistence";
import UserModel from "../models/user.model";

class UserRepository {

    public async findUser(id: number): Promise<User> {
        let user: any = await UserModel.findByPk(id);
        if (user == null) {
            throw new Error();
        } else {
            return (<User> user);
        }

    }

    public async findUsers(): Promise<Array<User>> {
        let users: Array<any> = await UserModel.findAll();
        if (users.length == 0) {
            throw new Error();
        } else {
            return (<Array<User>> users);
        }

    }

    public async newUser(user: User): Promise<User> {
        let newUser: any = await UserModel.create(user);

        return <User> newUser;

    }

    public async searchUsers(text: string): Promise<Array<User>> {
        console.log(text)
        let users: Array<any> = await persistence.query('SELECT * FROM user WHERE firstName LIKE "%' + text + '%" OR lastName LIKE "%' + text + '%" GROUP BY id', {
            model: UserModel,
            mapToModel: true // pass true here if you have any mapped fields
          });
          
        if (users.length == 0) {
            throw new Error();
        } else {
            return (<Array<User>> users);
        }

    }
}

export default new UserRepository();