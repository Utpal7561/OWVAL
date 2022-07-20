import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateProductCollectionInput } from "./dto/create-product-collection.dto";
import { ProductCollection, ProductCollectionDocument } from "./entities/product.collection.entity";


@Injectable()
export class ProductCollectionService{
    constructor(@InjectModel(ProductCollection.name) private productRepository: Model<ProductCollectionDocument>){}

     async create(createProductCollectionInput: CreateProductCollectionInput, path : string, filename: string) {
    // check if already exists 

    let checkIfExists = await this.checkIfExists(createProductCollectionInput.productName);
    
    if(!checkIfExists){

      // create the Product
      let cm = new ProductCollection();
      cm.productName = createProductCollectionInput.productName;


      // create product code here
      // let pcIndex = await this.getLatestIndex()
      // cm.productCodeIndex = pcIndex;

      // cm.productCode = this.padWithZero(pcIndex, 5);

      // productCategoryId
      // let pc = await this.productCategoryService.findOneById(createProductCollectionInput.productCategoryId)
      // cm.ProductCategory = pc;


      // manufacturerId
      // let mf = await this.manufacturerCollectionService.findOneById(createProductCollectionInput.manufacturerId)
      // cm.Manufacturer = mf;

      // productSubCategoryId
      // let psc = await this.productSubCategoryService.findOneById(createProductCollectionInput.productSubCategoryId)
      // cm.ProductSubCategory = psc;

      // brandId
      // let brand = await this.brandCollectionService.findOneById(createProductCollectionInput.brandId)
      // cm.Brand = brand;


      // unitId
      // let unit = await this.unitCollectionService.findOneById(createProductCollectionInput.unitId)
      // cm.Unit = unit;


 
      cm.taxRate = createProductCollectionInput.taxRate;
 
      cm.pricingMethod = createProductCollectionInput.pricingMethod;
      cm.hsn = createProductCollectionInput.hsn;
      cm.countryOfOrigin = createProductCollectionInput.countryOfOrigin;
      cm.isFeatured = createProductCollectionInput.isFeatured
      cm.productDescription = createProductCollectionInput.productDescription

      if(filename != null){
        cm.productLogo = {
          fileName: filename,
          url: path,
          fileType: 'products'
        }
      }

      let c = await this.productRepository.create(cm);

      // send to subscriber
      // this.pubSub.publish(NEW_PRODUCT_ADD,  1 );

      return {
        status: true,
        status_text: 'Successfully Added',
        data: c
      }
      

    }else{


      return {
        status: false,
        status_text: 'Already exists',
        data: null
      }
    }

  }


    async checkIfExists(productName: string){
    let r = await this.productRepository.count({
      productName: productName
    }).exec()

    if(r > 0){
      return true;
    }else{
      return false;
    }
  }

}