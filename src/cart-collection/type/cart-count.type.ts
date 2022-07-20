import { InputType, Int, Field, ObjectType } from '@nestjs/graphql';

@ObjectType('CartCount')
export class CartCount{
    @Field(type => Number, {nullable: true})
    cartCount: number;
}