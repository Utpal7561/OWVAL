import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { ReviewCollectionModule } from './order-review/review.module';
import { productReviewModule } from './product-review/product-review.module';
import { UserCollectionModule } from './user-collection/user.module';

import { UserModule } from './user/user.module';
import { UserResolver } from './user/user.resolver';
import { UserService } from './user/user.service';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nestgraphql')
    ,GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: true,
    playground:true,
  }),UserModule,UserCollectionModule,ReviewCollectionModule,productReviewModule],

  // verison 10 setup graphql.
  providers: [],
})
export class AppModule {}
