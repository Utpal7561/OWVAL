import { Column, Entity, ObjectIdColumn, PrimaryGeneratedColumn, ObjectID } from 'typeorm';
import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type ReviewCollectionDocument = ReviewCollection & Document;


@Schema()
export class ReviewCollection {
  @ObjectIdColumn()
  _id: ObjectID;

  @Prop({isRequired:true})
  title:string;

  @Prop({isRequired:true})
  description:string;

  @Prop({isRequired:true})
  rating:number;

  @Prop({isRequired:true})
  orderId:string;

  @Prop({isRequired:false})
  dataTime?:string;

}


export const ReviewCollectionSchema = SchemaFactory.createForClass(ReviewCollection);