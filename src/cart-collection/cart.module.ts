import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { cartCollection, cartCollectionSchema } from "./entities/cart.entity";


@Module({
    imports: [MongooseModule.forFeature([{ 
        name:cartCollection.name,               //collection name 
        schema:cartCollectionSchema,            //schema name
    }],)],
    
    providers: []
})

export class cartModule{}