// import { Injectable } from "@nestjs/common";
// import { InjectModel } from "@nestjs/mongoose";
// import { Model } from "mongoose";
// // import { createCartInput } from "./dto/create_cart.input";
// import { cartCollection, cartCollectionDocument } from "./entities/cart.entity";

// @Injectable()
// export class cartService{
//   constructor(@InjectModel(cartCollection.name)  //collection name
//     private readonly userModal: Model<cartCollectionDocument>) {}
//     // export type ReviewCollectionDocument = ReviewCollection & Document;

//     async addtocart(createcartInput:createCartInput, username:string){
//     let pp = await this.userModal.findOne(createcartInput.packId);

//     // let checkIfExists = await this.checkIfExists(
//     //   createcartInput.productId,
//     //   pp,
//     //   createcartInput.size,
//     //   username
//     // );
//     // }

//     // let checkIfExists = await this.checkIfExists(
//     // updateCartCollectionInput.productId,
//     // pp,
//     // updateCartCollectionInput.size,
//     // username
//     // );

//     // if (checkIfExists != null && checkIfExists != undefined){
//     //   checkIfExists.qty = updateCartCollectionInput.qty;
//     //   checkIfExists.amount = (
//     //     parseFloat(checkIfExists.price) * updateCartCollectionInput.qty
//     //   ).toFixed(2);

//     //   let res = await this.cartCollectionRepository.updateOne(
//     //     { _id: checkIfExists.id },
//     //     checkIfExists
//     //   );

//     //   return {
//     //     status: true,
//     //     status_text: "Successfully updated your cart",
//     //   };
//     // } else {
//     //   return {
//     //     status: false,
//     //     status_text: "Not found.",
//     //   };
//     // }
//     }
// }