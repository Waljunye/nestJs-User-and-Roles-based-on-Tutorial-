import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Role} from "./role.model";
import {CreateRoleDto} from "./dto/create-role.dto";

@Injectable()
export class RolesService {

    constructor(@InjectModel(Role) private roleRepo: typeof Role) {}

    async createRole(dto: CreateRoleDto){
        const role = this.roleRepo.create(dto);
        return role;
    }
    async getRoleByValue(value: string){
        const role = this.roleRepo.findOne({where : { value }})
        return role;
    }
    async getRoleById(id: number){
        const role = this.roleRepo.findByPk(id);
        return role;
    }
    async getAllRoles(){
        const role = this.roleRepo.findAll();
        return role;
    }
}
