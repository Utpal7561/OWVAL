import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ReviewCollection, ReviewCollectionDocument } from "./entities/review-collection.entity";
import { ReviewInput } from "./type/review-input.type";
import { ReviewUpdateInput } from "./type/updateReview.type";
import * as moment from "moment"; // import the moment with star in this type.


@Injectable()
export class ReviewService{

    constructor(@InjectModel(ReviewCollection.name) //collection name
    private readonly userModal: Model<ReviewCollectionDocument>) {}
    // export type ReviewCollectionDocument = ReviewCollection & Document;

    async postreview(reviewInput:ReviewInput){
    const review=new ReviewCollection();
    review.title=reviewInput.title;
    review.description=reviewInput.description;
    review.rating=reviewInput.rating;
    review.orderId=reviewInput.orderId;
    review.dataTime=moment().format("DD-MM-yyyy HH:mm:ss:aa");

    let createReview= await this.userModal.create(review);
    return{
        status:true,
        status_text:"Successfully Post Review",
        data:createReview
    };
    }

    async findOne(id: string) {
         return await this.userModal.findOne({ _id: id}).exec();
    }

    async updateReview(id:string, reviewInput:ReviewUpdateInput){
        let updatereview=await this.findOne(id);
        updatereview.title=reviewInput.title;
        updatereview.description=reviewInput.description;
        updatereview.rating=reviewInput.rating;
        
        let u = await this.userModal.updateOne({_id: id }, updatereview);

            if (u.modifiedCount == 1) {
            return {
                status: true,
                status_text: 'Successfully Updated',
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
    async  getReview(id: string,orderId:string){
    return await this.userModal.find({_id:id,orderId:orderId});
    }


    //to get the all review of users
    async findAllReview(): Promise<ReviewCollection[]> {
        return await this.userModal.find().exec();
    }
    
    
}