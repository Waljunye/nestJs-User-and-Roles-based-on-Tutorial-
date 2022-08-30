import {Module} from "@nestjs/common";
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import {SequelizeModule} from "@nestjs/sequelize";
import {ConfigModule} from "@nestjs/config";
import {User} from "./user/users.model";
import { RolesController } from './roles/roles.controller';
import { RolesService } from './roles/roles.service';
import { RolesModule } from './roles/roles.module';
import {Role} from "./roles/role.model";
import {UserRoles} from "./roles/user-roles.module";
import { AuthModule } from './auth/auth.module';

@Module({
  providers: [],
  imports: [
      UserModule,
      ConfigModule.forRoot({
          envFilePath: `.${process.env.NODE_ENV}.env`
      }),
      SequelizeModule.forRoot({
        dialect: 'postgres',
        host: process.env.DATABASE_HOST,
        port: Number(process.env.DATABASE_PORT),
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        models: [User, Role, UserRoles],
        autoLoadModels: true
      }),
      RolesModule,
      AuthModule
  ]
})
export class AppModule {}
