import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePackCartCollectionInput {
  @Field(() => String)
  packId: string;
  
}
