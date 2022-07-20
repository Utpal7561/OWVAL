import { Column, Entity, ObjectIdColumn, PrimaryGeneratedColumn, ObjectID } from 'typeorm';

import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
// import { ProductCategoryCollection } from 'src/product-category-collection/entities/product-category-collection.entity';
// import { ProductSubCategoryCollection } from 'src/product-sub-category-collection/entities/product-sub-category-collection.entity';
// import { BrandCollection } from 'src/brand-collection/entities/brand-collection.entity';
// import { UnitCollection } from 'src/unit-collection/entities/unit-collection.entity';
// import { ManufacturerCollection } from 'src/manufacturer-collection/entities/manufacturer-collection.entity';

export type ProductCollectionDocument = ProductCollection & Document;
export class ProductPhoto {
  @Prop()
  fileName: string;

  @Prop()
  fileType: string;

  @Prop({nullable: true})
  url: string;

}


@Schema()
export class ProductCollection {
  @ObjectIdColumn()
  _id: ObjectID;

  @Prop({isRequired:true, index: true, text: true})
  productName: string;

  @Prop({isRequired:false})
  productDescription: string;

  @Prop({isRequired:true})
  productCodeIndex: number;

  @Prop({isRequired:true})
  productCode: string;

//   @Prop({ type: mongoose.Schema.Types.ObjectId, ref: ProductCategoryCollection.name })
//   ProductCategory: ProductCategoryCollection;

    @Prop({isRequired:true})
     ProductCategory: string;

//   @Prop({ type: mongoose.Schema.Types.ObjectId, ref: ProductSubCategoryCollection.name })
//   ProductSubCategory: ProductSubCategoryCollection;

    @Prop({isRequired:true})
     ProductSubCategory: string;

//   @Prop({ type: mongoose.Schema.Types.ObjectId, ref: BrandCollection.name })
//   Brand: BrandCollection;

    @Prop({isRequired:true})
    Brand: string;

//   @Prop({ type: mongoose.Schema.Types.ObjectId, ref: ManufacturerCollection.name })
//   Manufacturer: ManufacturerCollection;

    @Prop({isRequired:true})
    Manufacturer: string;

    @Prop({isRequired:true})
    taxRate: string;


    @Prop({isRequired:true, enum: ['DISCOUNT_METHOD','MARKUP_METHOD'], default: 'DISCOUNT_METHOD'})
    pricingMethod: string;

//   @Prop({ type: mongoose.Schema.Types.ObjectId, ref: UnitCollection.name })
//   Unit: UnitCollection;

    @Prop({isRequired:true})
    Unit: string;
 

  @Prop({isRequired:true})
  hsn: string;


  @Prop({isRequired:false})
  countryOfOrigin: string;


  @Prop({isRequired:true, default: false})
  isFeatured: boolean;


  @Prop({nullable: true})
  productLogo: ProductPhoto;

}



const ProductCollectionSchema = SchemaFactory.createForClass(ProductCollection);


ProductCollectionSchema.index({ productName: 'text'})

export {ProductCollectionSchema}