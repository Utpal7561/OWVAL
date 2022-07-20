import { Field, InputType, Int, ObjectType } from "@nestjs/graphql";

@InputType()
export class ProductReviewInput{

 @Field(()=>String)
  title:string;

  @Field(()=>String)
  description:string;

  @Field(()=>Int)
  rating:number;

  @Field(()=>String)
  productId:string;

 
}