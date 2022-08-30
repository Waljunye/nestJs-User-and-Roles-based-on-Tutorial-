import { BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Role} from "../roles/role.model";
import {UserRoles} from "../roles/user-roles.module";

interface UserCreationAttrs {
    email: string;
    password: string;
}
@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {
    @ApiProperty({description: 'id', nullable: false})
    @Column({type: DataType.INTEGER, allowNull: false, autoIncrement: true, unique: true, primaryKey: true})
    id: number;

    @ApiProperty({description: 'email', nullable: false})
    @Column({type: DataType.STRING, allowNull:false, unique:true})
    email: string;

    @ApiProperty({description: 'password', nullable: false})
    @Column({type: DataType.STRING, allowNull: false, unique:false})
    password: string;

    @ApiProperty({description: 'isBanned', nullable: false})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    banned: boolean;

    @ApiProperty({description: 'banReason', nullable: true})
    @Column({type: DataType.STRING})
    banReason: string;

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[];
}
