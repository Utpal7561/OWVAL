
import { Field, InputType, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class getReviewById{

 @Field(()=>String)
  title:string;

  @Field(()=>String)
  description:string;

  @Field(()=>Int)
  rating:number;



}
