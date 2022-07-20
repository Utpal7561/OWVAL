import { Field, ObjectType } from "@nestjs/graphql";
import { userCollectionObjecType } from "./user_collectio-objcetType.type";

@ObjectType()
export class UserCollectionStatus{

    @Field(()=>Boolean)
    status:boolean;
    
    @Field(()=>String)
    status_text:string;

    @Field(()=>userCollectionObjecType)
    data:userCollectionObjecType;

}