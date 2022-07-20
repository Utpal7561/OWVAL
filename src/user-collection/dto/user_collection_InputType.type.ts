import { Field, InputType } from "@nestjs/graphql";
import { IsArray, IsBoolean, IsNotEmpty } from "class-validator";


@InputType()
export class UserCollectionInputType{
    @Field(()=>String,{ description: 'Type of the user (ADMIN, CLIENT, USER etc)',defaultValue:"USER" })
    superType:string;

    @Field(()=>String)
    @IsNotEmpty()
    name:string;


    @Field(()=>String)
    @IsNotEmpty()
    email:string;

    @Field(()=>String)
    @IsNotEmpty()
    phone:string;

    // @Field(()=>String)
    // @IsNotEmpty()
    // username:string;

    @IsNotEmpty()
    @Field(()=>String)
    password:string;

    @IsBoolean()
    @Field({defaultValue:false})
    isActive:boolean;

    @IsArray()
    @Field(()=>[String])
    role:string[];

    // @IsArray()
    // @Field(()=>[String])
    // refId:string[];
}