import {BelongsToMany, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../user/users.model";
import {Role} from "./role.model";

@Table({tableName: 'user-roles', createdAt: false, updatedAt: false})
export class UserRoles extends Model<Role> {
    @Column({type: DataType.INTEGER, allowNull: false, autoIncrement: true, unique: true, primaryKey: true})
    id: number;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER, allowNull:false})
    userId: number;

    @ForeignKey( () => Role)
    @Column({type: DataType.INTEGER, allowNull: false})
    roleId: number;

}
