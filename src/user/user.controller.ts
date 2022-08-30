import {Body, Controller, Get, HttpStatus, Param, Post, UseGuards} from '@nestjs/common';
import {UserService} from "./user.service";
import {CreateUserDto} from "./dto/create-user.dto";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {User} from "./users.model";
import {RolesGuard} from "../auth/roles.guard";
import {Roles} from "../auth/roles-auth.decorator";
import {AddRoleDto} from "./dto/add-role.dto";

@ApiTags('Users')
@Controller('users')
export class UserController {
    constructor(private userService: UserService) {}

    @Post()
    @ApiOperation({summary: "Добавляет нового пользователя"})
    @ApiResponse({ status: HttpStatus.OK, description: "Success", type: User })
    create(@Body() userDto: CreateUserDto){
        return this.userService.createUser(userDto);
    }

    @Get()
    @ApiOperation({summary: "Возвращает всех пользователей в базе данных"})
    @ApiResponse({ status: HttpStatus.OK, description: "Success", type: [User] })
    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    findAll(){
        return this.userService.getAllUsers();
    }

    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Get('/:id')
    @ApiOperation({summary: "Возвращает одного пользователя по ID"})
    @ApiResponse({ status: HttpStatus.OK, description: "Success", type: User })
    findOne(@Param('id') id: string){
        return this.userService.getUserById(Number(id));
    }

    @Post("/addRole")
    @ApiOperation({summary: "Возвращает всех пользователей в базе данных"})
    @ApiResponse({ status: HttpStatus.OK, description: "Success", type: [User] })
    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    addRole(@Body() dto: AddRoleDto){
        return this.userService.addRole(dto);
    }
}
