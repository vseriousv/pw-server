import Mongod from '../../common/MongoDB/Mongod.base';
import Users from './User.schema';

class UserModel extends Mongod{
  getAllUsers(): string {
    this.createConnection();
    return Users.find()
      .then(_ => {
        return _;
      });
  }

  getUserById(id): string {
    this.createConnection();
    return Users.findById(id)
      .then( _ => {
        return _;
      });
  }

  async createUser(nameBody, passBody): Promise<string>  {
    this.createConnection();
    const user = new Users({ name: nameBody, pass: passBody })
    return await user.save();
  }
}

export default UserModel;
