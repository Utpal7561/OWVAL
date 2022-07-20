import { Field, ObjectType } from "@nestjs/graphql";
import { IsArray, IsBoolean, IsNotEmpty } from "class-validator";

@ObjectType()
export class userCollectionObjecType{
    
    @Field(()=>String)
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
    @Field()
    isActive:boolean;

    @IsArray()
    @Field(()=>[String])
    role:string[];

  
}