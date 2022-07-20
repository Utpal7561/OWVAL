import { Field,Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class ProductReviewObject{

 @Field(()=>String)
  title:string;

  @Field(()=>String)
  description:string;

  @Field(()=>Int)
  rating:number;

  @Field(()=>String)
  productId:string;

 
}