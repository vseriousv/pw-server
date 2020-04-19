import { BodyParams, Controller, Post } from '@tsed/common';
import { ILogin } from '../../interfaces/ILogin';

@Controller('/auth')
export class AuthController  {

    @Post('/login')
    usersCreate(@BodyParams() bodyObject: ILogin): ILogin {
        return bodyObject;
    }
}

