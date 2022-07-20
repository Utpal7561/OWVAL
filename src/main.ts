import { NestFactory } from '@nestjs/core';
import { GraphQLSchemaHost } from '@nestjs/graphql';
import { AppModule } from './app.module';
import { writeFileSync } from 'fs';
import { join } from 'path';
import { printSchema } from 'graphql';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

}
bootstrap();
