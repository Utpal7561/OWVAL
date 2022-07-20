import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class ProductAverageRating{

    @Field(()=>Number,{nullable: false})
    Average?:number;

}