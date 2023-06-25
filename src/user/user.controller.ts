import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserRepository } from "./user.repository";
import { CreateUserDTO } from "./dto/CreateUser.dto";

@Controller('/users')
export class UserController {

  private userRepository = new UserRepository;

  @Post()
  async createUser(@Body() userData: CreateUserDTO) {
    this.userRepository.saveUser(userData);
    return {
      message: "user created!",
      user_data: {
        user_name: userData.name,
        user_email: userData.email,
        user_password: userData.password
      }
    };
  }

  @Get()
  async listUsers() {
    return {all_users: await this.userRepository.listUsers()};
  }
}