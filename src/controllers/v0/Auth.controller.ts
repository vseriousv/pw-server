import { Controller, Post, BodyParams, Header, Required } from '@tsed/common';
// import ILogin from '../../interfaces/ILogin'
@Controller('/auth')
export class AuthController  {
    @Header({
        'Access-Control-Allow-Origin': '*'
    })
    @Post('/login')
    auth(@BodyParams('name') @Required() name: string): string {
        // tslint:disable-next-line:no-console
        console.log('name: : : ', name);
        const login = { 'name': name };
        return JSON.stringify(login);
    }
}

