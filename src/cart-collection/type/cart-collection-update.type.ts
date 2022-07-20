import { InputType, Int, Field, ObjectType } from '@nestjs/graphql';


@ObjectType("CartCollectionUpdateType")
export class CartCollectionUpdateType {

  @Field(() => Boolean)
  status: boolean;

  @Field(() => String)
  status_text: string;

}
