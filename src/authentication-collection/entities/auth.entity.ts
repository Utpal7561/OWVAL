import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ObjectID, ObjectIdColumn } from "typeorm";


export type AuthenticationDocument = AuthenticationCollection & Document;


@Schema()
export class AuthenticationCollection{

@ObjectIdColumn()
_id: ObjectID;


  @Prop()
  email:string;


  @Prop()
  authString:string;

  @Prop()
  type:string;


  @Prop({default:false})
  isValid:boolean;



}

export const AuthenticationCollectionSchema = SchemaFactory.createForClass(AuthenticationCollection);