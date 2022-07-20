import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UserCollectionSchema, UserSchema } from "./entities/user_collection.entity";
import { UserResolvers } from "./user.resolver";
import { UserServices } from "./user.service";

@Module({
    imports: [MongooseModule.forFeature([{
    name:UserCollectionSchema.name,
    schema: UserSchema }],)],

  providers: [UserResolvers,UserServices]
})

export class UserCollectionModule {}