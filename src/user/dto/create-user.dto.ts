import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({description: 'email', nullable: false})
    readonly email: string;
    @ApiProperty({description: 'password', nullable: false})
    readonly password: string;
}
