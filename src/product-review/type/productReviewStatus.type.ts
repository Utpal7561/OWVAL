import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType("productReviewStatus")
export class productReviewStatus{
 @Field(() => Boolean)
  status: boolean;

  @Field(() => String)
  status_text: string;

}