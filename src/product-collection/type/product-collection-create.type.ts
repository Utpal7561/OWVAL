import { InputType, Int, Field, ObjectType } from '@nestjs/graphql';
import { ProductCollectionType } from './product-collection.type';


@ObjectType("ProductCollectionCreateType")
export class ProductCollectionCreateType {

  @Field(() => Boolean)
  status: boolean;

  @Field(() => String)
  status_text: string;

  @Field(() => ProductCollectionType, {nullable: true})
  data?: ProductCollectionType;

  
}
