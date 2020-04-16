// Query to database
import UserModel from '../../models/UsersModel/User.model';

class UserReadyService {
  user = new UserModel();

  public getRecord(): string {
    return this.user.getAllUsers();
  }

  public getRecordId(id): string {
    return this.user.getUserById(id);
  }
}

export default UserReadyService;
