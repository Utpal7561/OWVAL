import { InputType, Int, Field, ObjectType } from '@nestjs/graphql';


@ObjectType("CartCollectionDeleteType")
export class CartCollectionDeleteType {

  @Field(() => Boolean)
  status: boolean;

  @Field(() => String)
  status_text: string;

  
}
