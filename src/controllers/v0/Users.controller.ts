import { BodyParams, Controller, Get, Header, Post, Required } from '@tsed/common';

@Controller('/users')
export class UsersController  {
    @Get('/show')
    usersShow(): string {
        const data = { 'name': 'name' };
        return JSON.stringify(data);
    }

    @Post('/create')
    usersCreate(@BodyParams() bodyObject) {
        return bodyObject;
    }
}

