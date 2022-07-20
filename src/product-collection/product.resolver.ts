import { Resolver } from "@nestjs/graphql";
import { ProductCollectionService } from "./product.service";

@Resolver()
export class ProductCollectionResolver{
constructor(productSerive:ProductCollectionService){}

}