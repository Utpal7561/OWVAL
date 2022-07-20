import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class productReviewUpdate{

    @Field(()=>String)//,{nullable: ture}
    title?:string;

    @Field(()=>String)
    description:string;

    @Field(()=>Int)
    rating:number;

    @Field(()=>String)
    productId:string;
}