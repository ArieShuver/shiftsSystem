import { DataTypes, Model } from "sequelize";
import sequelize from "../db.config";

export class Shift extends Model {
  public id!: number;
  public startTime!: Date;
  public endTime!: Date;
  public location!: string;
}

Shift.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  startTime: { type: DataTypes.DATE, allowNull: false },
  endTime: { type: DataTypes.DATE, allowNull: false },
  location: { type: DataTypes.STRING, allowNull: false },
}, {
  sequelize,
  tableName: 'shifts',
  timestamps: false,
});

export default Shift;
