import {forwardRef, Module} from '@nestjs/common';
import {UserService} from "./user.service";
import {UserController} from "./user.controller";
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "./users.model";
import {Role} from "../roles/role.model";
import {UserRoles} from "../roles/user-roles.module";
import {RolesModule} from "../roles/roles.module";
import {AuthService} from "../auth/auth.service";
import {AuthModule} from "../auth/auth.module";

@Module({
    providers: [UserService],
    controllers: [UserController],
    imports: [
        forwardRef(() => AuthModule),
        SequelizeModule.forFeature([User, Role, UserRoles]),
        RolesModule
    ],
    exports: [UserService]
})
export class UserModule {}
