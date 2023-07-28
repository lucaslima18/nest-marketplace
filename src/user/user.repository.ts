import { error } from "console";
import { UserEntity } from "./user.entity";
import { NotFoundException } from "@nestjs/common";

export class UserRepository {
  private users: UserEntity[] = [];

  async saveUser(user: UserEntity) {
    this.users.push(user);
  }

  async listUsers() {
    return this.users
  }

  async emailExists( email: string ):  Promise<boolean> {
    return this.users.some(
      user => user.email === email
    );
  }

  async getUserByEmail(email: string): Promise<UserEntity> {
      const user = this.users.find(user => user.email === email);
      console.log(this.users)
      console.log(user)
      
      if ( !user ) {
        throw new NotFoundException();
      }

      return user
    }
}