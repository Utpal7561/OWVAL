import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { productReviewCollection, productReviewSchema } from "./entities/productReview.entity";
import { productRviewResolver } from "./product-review.resolver";
import { productReviewService } from "./product-review.service";


@Module({
    imports: [MongooseModule.forFeature([{ 
        name:productReviewCollection.name, //collection name 
        schema:productReviewSchema,       //schema name
    }],)],
    
    providers: [productRviewResolver,productReviewService]
})

export class productReviewModule{}


//here we import the the schema collection and schemaFactory