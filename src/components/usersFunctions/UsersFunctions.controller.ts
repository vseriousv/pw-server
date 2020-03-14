import {
  controller, httpGet, httpPost, httpPut, httpDelete
} from 'inversify-express-utils';
import { inject } from 'inversify';
import { UsersFunctionsService, IUsersFunction } from './UsersFunctions.service';
import { Request } from 'express';
import { TYPES } from './types';

@controller('/user')
export class UserController {

  constructor(@inject(TYPES.UsersFunction) private userService: UsersFunctionsService) { }

  @httpGet('/')
  public getUsersFunctions(): object[] {
    return this.userService.getFunctions();
  }

  @httpGet('/:id')
  public getUsersFunctionId(request: Request): IUsersFunction {
    return this.userService.getFunctionId(request.params.id) as IUsersFunction;
  }
}
