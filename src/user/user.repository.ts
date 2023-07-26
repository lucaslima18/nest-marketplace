import { UserEntity } from "./user.entity";

export class UserRepository {
  private users: UserEntity[] = [];

  async saveUser(user: UserEntity) {
    this.users.push(user);
  }

  async listUsers() {
    return this.users;
  }

  async emailExists(email: string):  Promise<boolean>{
    return this.users.some(
      user => user.email === email
    );
  }
}