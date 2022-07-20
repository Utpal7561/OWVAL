import { CreateProductCollectionInput } from './create-product-collection.dto';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProductCollectionInput extends PartialType(CreateProductCollectionInput) {
  @Field(() => String)
  id: string;
}
