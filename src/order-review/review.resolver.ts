
import { Args, Mutation, Resolver,Query } from "@nestjs/graphql";
import { ReviewService } from "./review.service";
import { ReviewInput } from "./type/review-input.type";
import { ReviewObjectCollection } from "./type/review-object.type";
import { ReviewStatus } from "./type/reviewStatus.type";
import { ReviewUpdateInput } from "./type/updateReview.type";

@Resolver()
export class ReviewResolver{

    constructor(private  readonly reviewservice:ReviewService){}


    @Mutation(()=>ReviewStatus)
    async postReview(@Args("ReviewInput") reviewInput:ReviewInput){
    return this.reviewservice.postreview(reviewInput);
    }

    @Mutation(()=>ReviewStatus)
    async updateReview(@Args("id") id:string, @Args("ReviewUpdateInput") reviewInput:ReviewUpdateInput){
    return this.reviewservice.updateReview(id, reviewInput); 
    }

    @Query(()=>[ReviewObjectCollection])
    async getReview(@Args("id") id:string,@Args("orderId") orderId:string){
    return this.reviewservice.getReview(id,orderId);
    }


    @Query(()=>[ReviewObjectCollection])
    async findAllReview(){
        return this.reviewservice.findAllReview();
    }

}