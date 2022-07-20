import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
// import { ClientCollectionService } from 'src/client-collection/client-collection.service';
import { CRYPTO, REDIRECT_LINK } from 'src/helper/Global.Constant';
import { AuthenticationCollection } from './entities/auth.entity';


@Injectable()
export class AuthenticationCollectionService {

  constructor(
    @InjectModel(AuthenticationCollection.name) private authenticationCollectionRepository: Model<AuthenticationCollection>,
    // @Inject(forwardRef(() => ClientCollectionService))
    // private clientCollectionService: ClientCollectionService,
    @Inject(CRYPTO) private crypto
  ) {}


  async checkAuthentication(authString: string) {

  // we will check if the authString is Valid

    // get authString check if valid
    let r = await this.authenticationCollectionRepository.findOne({
      authString: authString,
      isValid: true
    }).exec()

    if(r){
      

      // we got the string now we will make the account active by checking the types

      if(r.type == 'CLIENT_EMAIL_VERIFICATION'){
        // we will now activate the client and mark as client verified

        // await this.clientCollectionService.markAsEmailVerified(r.email);
        r.isValid = false;
        let cc1 = await this.authenticationCollectionRepository.updateOne({_id: r.id}, r);
        // and redirect this page login
        return {
          status: true,
          status_text: 'Successfully Verified. Now you can login to the site.',
          link: `${REDIRECT_LINK}/verification-owval?status=true&message=Successfully Verified. Now you can login to the site.`
        }

      }

      if(r.type == 'CLIENT_FORGOT_PASSWORD'){
        // await this.clientCollectionService.markAsEmailVerified(r.email);
        let cc1 = await this.authenticationCollectionRepository.updateOne({_id: r.id}, r);
        // and redirect this page login
        return {
          status: true,
          status_text: 'Successfully Verified. Now you can login to the site.',
          link: `${REDIRECT_LINK}/password-change?data=${r.authString}`
        }
      }


    }else{
      return {
        status: false,
        status_text: 'Token timeout'
      }
    }

  }


  async createAuthentication(email:string, type: string) {
    // we will check if a token is already sent for this email

    let r = await this.authenticationCollectionRepository.findOne({
      email: email,
      type: type
    }).exec()
    let randString = this.crypto.randomBytes(20).toString('hex');;

    if(r){

      // found we will update the token
      r.authString = randString;
      r.isValid = true;
      let cc1 = await this.authenticationCollectionRepository.updateOne({_id: r.id}, r);
     
      return randString;

    }else{
      // we will create a token and insert it as new


      let cm = new AuthenticationCollection();
      cm.email = email;
      cm.authString = randString;
      cm.type = type;
      cm.isValid = true;
      
      
     


     let c = await this.authenticationCollectionRepository.create(cm);

     return randString;
    }
  }


  async checkForgotTokenIfValid(authString: string) {
    // we will check if a token is already sent for this email

    let r = await this.authenticationCollectionRepository.findOne({
      authString,
      isValid: true
    }).exec()
    
    if(r){

      return {
        status: true,
        status_text: "Please insert new password"
      }
    

    }else{
     return {
       status: false,
       status_text: "Token Expired",
       username: ''
     }
    }
  }


  async getEmail(authString: string) {
    // we will check if a token is already sent for this email

    let r = await this.authenticationCollectionRepository.findOne({
      authString,
      isValid: true
    }).exec()
    
    if(r){

      return r.email;
    

    }else{
     return false;
    }
  }


  async deactivateToken(email: string, type: string) {
    // we will check if a token is already sent for this email

    let r = await this.authenticationCollectionRepository.findOne({
      email,
      type,
      isValid: true
    }).exec()
    
    if(r){

      r.isValid = false;
      let cc1 = await this.authenticationCollectionRepository.updateOne({_id: r.id}, r);

      return true;
    

    }else{
     return false;
    }
  }

 
}