import UserReadyService  from './UserReady.services';
import UserCreateService from './UserCreate.service';
import UserUpdateService from './UserUpdate.service';
import UserRemoveService from './UserRemove.service';

class UsersService {
  userReady(): string {
    const USER_SERVICE = new UserReadyService();
    return USER_SERVICE.getRecord();
  }

  userReadyId(id): string {
    const USER_SERVICE = new UserReadyService();
    return USER_SERVICE.getRecordId(id);
  }

  userCreate(name, pass): Promise<string> {
    const USER_SERVICE = new UserCreateService();
    return USER_SERVICE.createRecord(name, pass);
  }

  userUpdate(): string {
    const USER_SERVICE = new UserUpdateService();
    return USER_SERVICE.INIT
  }

  userRemove(): string{
    const USER_SERVICE = new UserRemoveService();
    return USER_SERVICE.INIT;
  }
}

export default UsersService;
