import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType("ReviewStatus")
export class ReviewStatus{
 @Field(() => Boolean)
  status: boolean;

  @Field(() => String)
  status_text: string;

}