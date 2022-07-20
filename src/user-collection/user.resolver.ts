import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { login } from "./dto/login.dto";
import { UpdateUserCollectionInput } from "./dto/update.type";
import { UserCollectionStatus } from "./dto/UserCollectionStatus.type";
import { userCollectionObjecType } from "./dto/user_collectio-objcetType.type";
import { UserCollectionInputType } from "./dto/user_collection_InputType.type";
import { ForgotPasswordType } from "./type/forgetPassowrd.type";
import { UserServices } from "./user.service";

@Resolver()
export class UserResolvers{

    constructor(private userService: UserServices){}

    @Mutation((returns) => UserCollectionStatus)
    async createUser(@Args("UserCollectionInputType") userInputType:UserCollectionInputType){
        return this.userService.CreateUser(userInputType);
    }

  @Mutation(() => UserCollectionStatus)
    updateUserCollection(@Args('updateUserCollectionInput') updateUserCollectionInput: UpdateUserCollectionInput){
    return this.userService.update(updateUserCollectionInput.id,updateUserCollectionInput);
  }

   @Mutation(() => UserCollectionStatus)
    removeUserCollection(@Args('id', { type: () => String }) id: string){
    return this.userService.remove(id);
  }

  @Mutation((returns) => login)
  async login(@Args('email') email: string, @Args('password') password: string,){
    return this.userService.loginUser(email,password);
  }


  @Mutation(() => UserCollectionStatus)
  deleteUser(
  @Args('id')id: string) {
    return this.userService.deleteUser(id);
  }

  
  @Query(() => [userCollectionObjecType],)
  findAll() {
    return this.userService.findAll();
  }

   @Mutation(() => ForgotPasswordType)
   forgotPassword(@Args('email') email: string) {
   return this.userService.forgotPassword(email);
   }

   @Mutation(() =>ForgotPasswordType)
   updatepassword(@Args('email') email:string,@Args('oldPassword') oldpassword:string,@Args('newPassword') newpassword:string){
     return this.userService.updatePassword(email,oldpassword,newpassword);
   }


}