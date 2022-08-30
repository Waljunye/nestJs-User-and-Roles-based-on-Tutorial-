import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {RolesService} from "./roles.service";
import {CreateRoleDto} from "./dto/create-role.dto";

@Controller('roles')
export class RolesController {
    constructor(private roleService: RolesService) {
    }

    @Get("/value/:value")
    getRoleByValue(@Param("value") value: string) {
        return this.roleService.getRoleByValue(value)
    }

    @Get("/id/:id")
    getRoleById(@Param("id") id: number) {
        return this.roleService.getRoleById(id);
    }

    @Get()
    getAllRoles(){
        return this.roleService.getAllRoles();
    }

    @Post()
    create(@Body() dto: CreateRoleDto){
        return this.roleService.createRole(dto);
    }
}