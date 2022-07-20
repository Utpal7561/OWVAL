// import { Args, Mutation, Resolver } from "@nestjs/graphql";
// import { cartService } from "./cart.service";
// // import { createCartInput } from "./dto/create_cart.input";
// import { createCartObjectType } from "./type/cart-collection-create.type";

// @Resolver()
// export class cartResolver{
// constructor(private readonly userService:cartService){}

// @Mutation(()=> createCartObjectType)
// addtocart(@Args('createCartInput') createcartInput:, username:string){
//     return this.userService.addtocart(createcartInput,username);
// }


// }