import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class DeleteCartCollectionByPackInput {
  

  @Field(() => String,{nullable:true,defaultValue:null})
  packId?: string;

 

}