import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthenticationCollectionDto } from './create-auth.dto';

export class UpdateAuthenticationCollectionDto extends PartialType(CreateAuthenticationCollectionDto) {}
