import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { productReviewService } from "./product-review.service";
import { ProductAverageRating } from "./type/ProductAverageRating.type";
import { ProductReviewInput } from "./type/productReviewInput.type";
import { ProductReviewObject } from "./type/productReviewObjcet.type";
import { productReviewStatus } from "./type/productReviewStatus.type";
import { productReviewUpdate} from "./type/productUpdateInput.type";

@Resolver()
export class productRviewResolver{

    constructor(private productreviewservice: productReviewService){}

    @Mutation(()=>productReviewStatus)
    async postProductReview(@Args("productReviewInput") productreviewInput:ProductReviewInput){
    return this.productreviewservice.postProductReview(productreviewInput);
    }

    @Mutation(()=>productReviewStatus)
    async updateProductReview(@Args("id") id:string, @Args("productReviewUpdateInput") reviewupdate:productReviewUpdate){
    return this.productreviewservice.updateProductReview(id, reviewupdate); 
    }

    @Query(()=>[ProductReviewObject])
    async getProductReview(@Args("id") id:string,@Args("productId") productId:string){
    return this.productreviewservice.getProductReview(id,productId);
    }

    @Query(()=>[ProductReviewObject])
    async findAllProductReview(){
        return this.productreviewservice.findAllProductReview();
    }

    @Query(()=>ProductAverageRating)
    async findAverage(@Args("productId") productId:string,){
        return this.productreviewservice.FindAverage(productId);
    }

}