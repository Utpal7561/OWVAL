import { Field, ObjectType } from "@nestjs/graphql";
import { IsNotEmpty, IsString } from "class-validator";

@ObjectType()
export class login{

    @Field(()=>Boolean)
    status:boolean;
    
    @Field(()=>String)
    status_text:string;

}