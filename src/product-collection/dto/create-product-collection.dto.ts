import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateProductCollectionInput {
  @Field(() => String)
  productName: string;

  @Field(() => String)
  productDescription: string;

  
  @Field(() => String)
  productCategoryId: string;

  @Field(() => String)
  productSubCategoryId: string;

  @Field(() => String)
  brandId: string;


  @Field(() => String)
  manufacturerId: string;

  @Field(() => String)
  taxRate: string;

  @Field(() => String)
  pricingMethod: string;

  @Field(() => String)
  unitId: string;

  @Field(() => String)
  hsn: string;

  @Field(() => String, {nullable: true})
  countryOfOrigin: string;

  @Field(() => Boolean)
  isFeatured?: boolean;



}
