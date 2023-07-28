import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserRepository } from "./user.repository";
import { CreateUserDTO } from "./dto/CreateUser.dto";
import { UserEntity } from "./user.entity";
import { v4 as uuid } from 'uuid'
import { ListUsersDTO } from "./dto/ListUsers.dto";

@Controller('/users')
export class UserController {

  constructor(private userRepository: UserRepository) {}

  @Post()
  async createUser(@Body() userData: CreateUserDTO) {
    const userEntity: UserEntity = new UserEntity();

    userEntity.id = uuid();
    userEntity.name = userData.name;
    userEntity.email = userData.email;
    userEntity.password = userData.password;

    this.userRepository.saveUser(userEntity);
    return { user: new ListUsersDTO(userEntity.id, userEntity.email), message: "user created!"};
  }

  @Get()
  async listUsers() {
    const all_users = await this.userRepository.listUsers();
    return all_users.map(
      user => new ListUsersDTO(
        user.id,
        user.name
      )
    );
  }
}