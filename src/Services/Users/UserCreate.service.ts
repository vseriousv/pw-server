// Create record to DB
import UserModel from '../../Models/UsersModel/User.model';

class UserCreateService {
  user = new UserModel();
  public createRecord(name, pass): Promise<string> {
    return this.user.createUser(name, pass);
  }
}

export default UserCreateService;
