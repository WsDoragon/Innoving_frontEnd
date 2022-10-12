import { Rol } from './../../entities/rol';
import { DataTypes, Model } from "sequelize";
import persistence from "../config/persistence";

class RolModel extends Model<Rol> {

}

RolModel.init({
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'user',
    timestamps: false,
    sequelize: persistence
  })
  
  export default RolModel