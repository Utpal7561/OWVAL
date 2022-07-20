
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID, ObjectIdColumn } from "typeorm";
import { Document } from 'mongoose';

export type produtReviewDocument= productReviewCollection & Document;

@Schema()
export class productReviewCollection{

    @ObjectIdColumn()
    _id: ObjectID;

    @Prop({isRequired:true})
    title:string;

    @Prop({isRequired:true})
    description:string;

    @Prop({isRequired:true})
    rating:number;

    @Prop({isRequired:true})
    productId:string;

    @Prop({isRequired:false})
    dataTime?:string;

}

export const productReviewSchema= SchemaFactory.createForClass(productReviewCollection);