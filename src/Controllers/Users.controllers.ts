import { GET, Path, PathParam } from 'typescript-rest';
import UsersService from '../Services/Users/Users.service';

@Path('/users')
export default class UsersControllers {

  service = new UsersService();

  @GET
  userList(): string {
    return 'Users Controller';
  }

  @GET
  @Path('/ready')
  userReady(): string {
    const result = this.service.userReady();
    return result;
  }

  @GET
  @Path('/ready/:id')
  userReadyId(@PathParam('id') id: string): string | number | object {
    return this.service.userReadyId(id);
  }

  @GET
  @Path('/create/:name/:pass')
  userCreate(@PathParam('name') name: string, @PathParam('pass') pass: string): Promise<string> {
    return this.service.userCreate(name, pass);
  }

  // @GET
  // @Path('/update')
  // userUpdate(): string {
  //   return this.service.userUpdate();
  // }
  //
  // @GET
  // @Path('/remove')
  // userRemove(): string {
  //   return this.service.userRemove();
  // }
}
