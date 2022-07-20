import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ReviewCollection, ReviewCollectionSchema } from "./entities/review-collection.entity";
import { ReviewResolver } from "./review.resolver";
import { ReviewService } from "./review.service";



@Module({
    imports: [MongooseModule.forFeature([{
    name:ReviewCollection.name,  //collection name
    schema: ReviewCollectionSchema }],)], //schema name

  providers: [ReviewResolver,ReviewService]
})

export class ReviewCollectionModule {}