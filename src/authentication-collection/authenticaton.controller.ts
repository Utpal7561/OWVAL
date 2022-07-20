import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Redirect,
  Header,
  Res,
} from '@nestjs/common';
import { REDIRECT_LINK } from 'src/helper/Global.Constant';
import { AuthenticationCollectionService } from './auth.service';


@Controller('owval-authentication')
export class AuthenticationCollectionController {
  constructor(
    private readonly authenticationCollectionService: AuthenticationCollectionService,
  ) {}

  @Get(':authString')
  @Header('Cache-Control', 'no-cache')
  @Redirect(REDIRECT_LINK, 301)
  async checkAuthentication(@Param('authString') authString: string) {
    let result = await this.authenticationCollectionService.checkAuthentication(
      authString,
    );

    return {
      url: result.link,
      statusCode: 301
    } 
  }


  @Get('/verify/:authString')
  @Header('Cache-Control', 'no-cache')
  async checkForgotData(@Param('authString') authString: string) {
    let result = await this.authenticationCollectionService.checkForgotTokenIfValid(
      authString,
    );


    return result;

  
  }
}
