import { Field, InputType, Int, ObjectType } from "@nestjs/graphql";

@InputType()
export class ReviewUpdateInput{
    
    @Field(()=>String)
    title:string;

    @Field(()=>String)
    description:string;

    @Field(()=>Int)
    rating:number;
 
}