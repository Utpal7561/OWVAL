import { forwardRef, Module } from '@nestjs/common';
import { AuthenticationCollectionService } from './auth.service';
import { AuthenticationCollectionController} from './authenticaton.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthenticationCollection, AuthenticationCollectionSchema } from './entities/auth.entity';
// import { ClientCollectionModule } from 'src/client-collection/client-collection.module';
import * as crypto from 'crypto';
import { CRYPTO } from 'src/helper/Global.Constant';


@Module({
  imports: [MongooseModule.forFeature([{ name: AuthenticationCollection.name, schema: AuthenticationCollectionSchema }]), ],//forwardRef(() => ClientCollectionModule)
  controllers: [AuthenticationCollectionController],
  providers: [AuthenticationCollectionService,
    {
    provide: CRYPTO,
    useValue: crypto
  }
],
  exports: [AuthenticationCollectionService]
})
export class AuthenticationCollectionModule {}