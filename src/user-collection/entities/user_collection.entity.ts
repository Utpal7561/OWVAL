import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ObjectIdColumn } from "typeorm";

export type UserCollectionDocument=UserCollectionSchema & Document;

@Schema()
export class UserCollectionSchema{
    
    @ObjectIdColumn()
    _id: string;

    @Prop({required:true})
    superType:string;

    @Prop({required:true})
    name:string;

    @Prop({required:true})
    email:string;

    @Prop({required:true})
    phone:string;


    // @Prop({required:true})
    // username:string;

    @Prop({required:true})
    password:string;

    @Prop({default:true,required:true})
    isActive:boolean;

    @Prop({required:true})
    role:string[];

    

}
export const UserSchema=SchemaFactory.createForClass(UserCollectionSchema);
