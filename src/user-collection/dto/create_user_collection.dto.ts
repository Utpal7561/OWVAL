import { IsArray, IsBoolean, IsNotEmpty, IsString } from 'class-validator';
export class CreateUserCollectioDto{

    @IsString()
    superType:string;

    @IsString()
    @IsNotEmpty()
    name:string;

    @IsString()
    @IsNotEmpty()
    email:string;

    @IsString()
    @IsNotEmpty()
    phone:string;

    // @IsString()
    // @IsNotEmpty()
    // username:string;

    @IsNotEmpty()
    @IsString()
    password:string;

    @IsBoolean()
    isActive:boolean;

    @IsArray()
    role:string[];

    
    
}