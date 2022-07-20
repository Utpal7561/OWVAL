import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID, ObjectIdColumn } from 'typeorm';
export type cartCollectionDocument= cartCollection & Document;

@Schema({autoIndex: true,
    timestamps: true})
export class cartCollection{

    @Prop()
    @ObjectIdColumn()
    _id: ObjectID;

//   @Prop({ type: mongoose.Schema.Types.ObjectId, ref: ProductCollection.name })
//   Product: ProductCollection;

    @Prop({isRequired:true})
    size: string;


    @Prop({isRequired:true})
    qty: number;


    @Prop({isRequired:true})
    price: string;

    @Prop({isRequired:true})
    amount: string;


    @Prop({isRequired:false,default:null})
    isAssociatedWithPack: boolean;

//   @Prop({ type: mongoose.Schema.Types.ObjectId, ref: PackCollection.name,isRequired:false,default:null })
//   Pack?: PackCollection;

    @Prop({isRequired:true})
    createdBy: string;
}

export const cartCollectionSchema = SchemaFactory.createForClass(cartCollection);