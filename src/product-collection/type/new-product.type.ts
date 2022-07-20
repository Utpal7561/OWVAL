import { InputType, Int, Field, ObjectType } from '@nestjs/graphql';

@ObjectType('NewProductAdd')
export class NewProductAdd{
    @Field(type => Number, {nullable: true})
    countChanged: number;
}