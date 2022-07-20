import { forwardRef, Module } from '@nestjs/common';
import { ProductCollectionService } from './product.service';
import { ProductCollectionResolver } from './product.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductCollection, ProductCollectionSchema } from './entities/product.collection.entity';
// import { ProductCategoryCollectionModule } from 'src/product-category-collection/product-category-collection.module';
// import { ProductSubCategoryCollectionModule } from 'src/product-sub-category-collection/product-sub-category-collection.module';
// import { UnitCollectionModule } from 'src/unit-collection/unit-collection.module';
// import { BrandCollectionModule } from 'src/brand-collection/brand-collection.module';
// import { ManufacturerCollectionModule } from 'src/manufacturer-collection/manufacturer-collection.module';
// import { UserCollectionModule } from 'src/user-collection/user-collection.module';
// import { CurrentStockCollectionModule } from 'src/current-stock-collection/current-stock-collection.module';
// import { WishlistCollectionModule } from 'src/wishlist-collection/wishlist-collection.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: ProductCollection.name, schema: ProductCollectionSchema }]), ],//forwardRef(() => ProductCategoryCollectionModule), forwardRef(() => ProductSubCategoryCollectionModule), UnitCollectionModule, BrandCollectionModule, ManufacturerCollectionModule, UserCollectionModule, forwardRef(() => CurrentStockCollectionModule),forwardRef(() => WishlistCollectionModule)
  providers: [ProductCollectionResolver, ProductCollectionService],
  exports: [ProductCollectionService]
})
export class ProductCollectionModule {}
