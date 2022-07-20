import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class DeleteCartCollectionInput {
  @Field(() => String)
  productId: string;

  @Field(() => String)
  size?: string;

  @Field(() => String,{nullable:true,defaultValue:null})
  packId?: string;

  @Field(() => Boolean,{nullable:true,defaultValue:false})
  isAssociatedWithPack?: boolean;

}