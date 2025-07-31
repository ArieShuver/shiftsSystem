import { DataTypes, Model } from "sequelize";
import sequelize from "../db.config";
import User from "./userModle";
import Shift from "./shiftModle";

export class Assignment extends Model {
  public id!: number;
  public userId!: number;
  public shiftId!: number;
}

Assignment.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    },
    allowNull: false,
  },
  shiftId: {
    type: DataTypes.INTEGER,
    references: {
      model: Shift,
      key: 'id',
    },
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'assignments',
  timestamps: false,
});

export default Assignment;
