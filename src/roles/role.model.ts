import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../user/users.model";
import {UserRoles} from "./user-roles.module";

interface RoleCreationAttrs {
    value: string;
    description: string;
}


@Table({tableName: 'roles'})
export class Role extends Model<Role, RoleCreationAttrs> {
    @ApiProperty({description: 'id', nullable: false})
    @Column({type: DataType.INTEGER, allowNull: false, autoIncrement: true, unique: true, primaryKey: true})
    id: number;

    @ApiProperty({description: 'email', nullable: false})
    @Column({type: DataType.STRING, allowNull:false, unique:true})
    value: string;

    @ApiProperty({description: 'password', nullable: false})
    @Column({type: DataType.STRING, allowNull: false})
    description: string;

    @BelongsToMany(() => User, () => UserRoles)
    users: User[];
}
