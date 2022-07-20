import { InputType, Int, Field, ObjectType } from '@nestjs/graphql';
// import { PackCollectionType } from 'src/pack-collection/types/pack-collection.type';
// import { ProductCollectionType } from 'src/product-collection/types/product-collection.type';




@ObjectType("CartCollectionType")
export class CartCollectionType {

  @Field(() => String)
  id: string;

//   @Field(() => ProductCollectionType)
//   Product: ProductCollectionType;

  @Field(() => String,{nullable:false})
  size: string;


  @Field(() => String,{nullable:false})
  price: string;


  @Field(() => Number,{nullable:false})
  qty: number;


  @Field(() => String,{nullable:false})
  amount: string;

//   @Field(() => PackCollectionType,{nullable:true,defaultValue:null})
//   Pack?: PackCollectionType;

  @Field(() => String,{nullable:false})
  isAssociatedWithPack: boolean;
  
}