import { InputType, Int, Field, ObjectType } from '@nestjs/graphql';
// import { CreateBrandCollectionInput } from 'src/brand-collection/input/create-brand-collection.input';
// import { BrandCollectionType } from 'src/brand-collection/types/brand-collection.type';
// import { CurrentStockCollectionType } from 'src/current-stock-collection/types/current-stock-collection.type';
// import { ManufacturerCollectionType } from 'src/manufacturer-collection/types/manufacturer-collection.type';
// import { ProductCategoryCollection } from 'src/product-category-collection/entities/product-category-collection.entity';
// import { CreateProductCategoryCollectionInput } from 'src/product-category-collection/input/create-product-category-collection.input';
// import { ProductCategoryCollectionType } from 'src/product-category-collection/types/product-category-collection.type';
// import { CreateProductSubCategoryCollectionInput } from 'src/product-sub-category-collection/input/create-product-sub-category-collection.input';
// import { ProductSubCategoryCollectionType } from 'src/product-sub-category-collection/types/product-sub-category-collection.type';
// import { CreateUnitCollectionInput } from 'src/unit-collection/dto/create-unit-collection.input';
// import { UnitCollectionType } from 'src/unit-collection/types/unit-collection.type';

@ObjectType("ProductLogo")
export class ProductLogo {
  @Field(() => String)
  fileName: string;

  @Field(() => String)
  fileType: string;

  @Field(() => String)
  url: string;

}

@ObjectType("ProductCollectionType")
export class ProductCollectionType {

  @Field(() => String)
  id: string;

  @Field(() => String,{nullable:true})
  productName: string;

  @Field(() => String,{nullable:true})
  productDescription: string;

  @Field(() => String,{nullable:true})
  productCode: string;

  @Field(() => String, {nullable: true})
  productCategoryId: string;

  @Field(() => String, {nullable: true})
  productSubCategoryId: string;

  @Field(() => String, {nullable: true})
  brandId: string;

//   @Field(() => [CurrentStockCollectionType], {nullable: true})
//   currentStock?: CurrentStockCollectionType[];

    @Field(() => String, {nullable: true})
    currentStock?: string;

  @Field(() => Boolean, {nullable: true})
  isWished?: boolean;
  


  @Field(() => String, {nullable: true})
  manufacturerId: string;


  @Field(() => String, {nullable: true})
  taxRate: String;


  @Field(() => String, {nullable: true})
  pricingMethod: String;

  @Field(() => String, {nullable: true})
  unitId: string;

  @Field(() => String, {nullable: true})
  hsn: String;

  @Field(() => String, {nullable: true})
  countryOfOrigin: String;

  @Field(() => Int, {nullable: true})
  isFeatured?: boolean;

  @Field(() => ProductLogo, {nullable: true})
  productLogo: ProductLogo;

//   @Field(() => ProductCategoryCollectionType)
//   ProductCategory: ProductCategoryCollectionType;

    @Field(()=>String,{nullable: true})
    ProductCategory: string;

//   @Field(() => ProductSubCategoryCollectionType)
//   ProductSubCategory: ProductSubCategoryCollectionType;
    
    @Field(()=>String,{nullable: true})
    ProductSubCategory: string;

//   @Field(() => BrandCollectionType)
//   Brand: BrandCollectionType;
    @Field(()=>String,{nullable: true})
    Brand: string;

//   @Field(() => ManufacturerCollectionType, { nullable: true})
//   Manufacturer: ManufacturerCollectionType;
    @Field(()=>String,{nullable: true})
    Manufacturer: string;


//   @Field(() => UnitCollectionType)
//   Unit: UnitCollectionType;
    @Field(()=>String,{nullable: true})
        Unit: string;
}

