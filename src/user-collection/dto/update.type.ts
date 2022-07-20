import { UserCollectionInputType } from './user_collection_InputType.type';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserCollectionInput extends PartialType(UserCollectionInputType) {
  @Field(() => String)
  id: string;
}
