import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class createCartInput{
    
    @Field(() => String)
    productId: string;

    @Field(() => String)
    size: string;

    @Field(() => Number)
    qty: number;

    @Field(() => String)
    price: string;

    @Field(() => String)
    amount: string;

    @Field(() => String,{nullable:true,defaultValue:null})
    packId?: string;

    @Field(() => Boolean,{nullable:true,defaultValue:false})
    isAssociatedWithPack?: boolean;

}