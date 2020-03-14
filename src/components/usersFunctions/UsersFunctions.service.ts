import { injectable, inject } from 'inversify';
import 'reflect-metadata';
import fs from 'fs';
import { IUsersFunctions } from './IUsersFunctions';
import { config } from '../../config';

interface IUsersFunction {
  id: number,
  name: string,
  body: string
}

@injectable()
class UsersFunctionsService implements IUsersFunctions {

  getFunctions(): object[] {
    const arrObj =
      [
        {
          'id': 0,
          'name': 'first_name',
          'body': 'get first name'
        },
        {
          'id': 1,
          'name': 'second_name',
          'body': 'get second name'
        },
        {
          'id': 2,
          'name': 'third_name',
          'body': 'get third name'
        }
      ];

      return arrObj;
  }

  getFunctionId(id: number): object {
    const obj = {
      'id': 0,
      'name': 'first_name',
      'body': 'get first name'
    }
    return obj;
  }

  createFunction(id: number, name: string, body: string): void {
  }

  removeFunction(id: number): void {
  }

  updateFunction(id: number, name: string, body: string): void {
  }

}

export { UsersFunctionsService, IUsersFunction };
