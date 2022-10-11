import { DataTypes, Model } from "sequelize";
import { User } from "../../entities/user";
import persistence from "../config/persistence";

class UserModel extends Model<User> {

}

UserModel.init({
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'user',
    timestamps: false,
    sequelize: persistence
  })
  
  export default UserModel