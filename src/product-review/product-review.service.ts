import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { productReviewCollection, produtReviewDocument } from "./entities/productReview.entity";
import * as moment from "moment"; // import the moment with star in this type.
import { ProductReviewInput } from "./type/productReviewInput.type";
import { productReviewUpdate} from "./type/productUpdateInput.type";

@Injectable()
export class productReviewService{

    constructor(@InjectModel(productReviewCollection.name) //collection name
    private readonly userModal: Model<produtReviewDocument>) {}
    // export type ReviewCollectionDocument = ReviewCollection & Document;

    async postProductReview(reviewInput:ProductReviewInput){
    const review=new productReviewCollection();
    review.title=reviewInput.title;
    review.description=reviewInput.description;
    review.rating=reviewInput.rating;
    review.productId=reviewInput.productId;            // 1st one is schema and 2nd one is inputType
    review.dataTime=moment().format("DD-MM-yyyy hh:mm:ss a");  // HH capital (24) and hh ->12  a=am ,pm

    let createReview= await this.userModal.create(review);
    return{
        status:true,
        status_text:"Product Reviewed Successfully",
        data:createReview
    };
    }

    async findOne(id: string) {
         return await this.userModal.findOne({ _id: id}).exec();
    }

    async updateProductReview(id:string, reviewInput:productReviewUpdate){
        let updatereview=await this.findOne(id);
        updatereview.title=reviewInput.title;
        updatereview.description=reviewInput.description;
        updatereview.rating=reviewInput.rating;
        
        let u = await this.userModal.updateOne({_id: id }, updatereview);
            if (u.modifiedCount == 1) {
            return {
                status: true,
                status_text: 'Successfully Updated Product Review',
                data: await this.findOne(id),
            };
            } else {
            return {
                status: false,
                status_text: 'Failed to Update',
                data: await this.findOne(id),
            };
            }
    }

    //  async findAll(id: string,orderId:string) {
    //     return await this.userModal.find({ _id: id,orderId:orderId }).exec();
    // }

    //to get reviews from user by _id and orderId
    async  getProductReview(id: string,productId:string){
    return await this.userModal.find({_id:id,productId:productId});
    }


    //to get the all review of users
    async findAllProductReview(): Promise<productReviewCollection[]> {
        return await this.userModal.find().exec();
    }

    async FindAverage(productId:string){
        let findproductId = await this.userModal.find({productId:productId,}).exec();
        let  result=await this.userModal.find({productId:productId}).count();
        let count=0;
        const getRating=findproductId.map((x)=>{
            count =count + x.rating;
        });
       let cc:any=count/result;  // To get the return type in integer .
        // console.log(count);
        // console.log(result);
        // console.log(cc);
        // console.log(parseInt(cc));
        return{
            Average:  parseInt(cc)
        };


    }
}