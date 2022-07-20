import { Field, ObjectType } from "@nestjs/graphql";
// import { createCartInput } from "../dto/create_cart.input";

@ObjectType()
export class createCartObjectType{
    @Field(() => Boolean)
    status: boolean;

    @Field(() => String)
    status_text: string;

    // @Field(() => [createCartInput], {nullable: true})
    // data?: createCartInput[];

}