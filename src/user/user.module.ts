import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserRepository } from "./user.repository";
import { EmailIsUniqueValidator } from "./validator/EmailIsUnique.validator";
import { UserService } from "./user.service";

@Module({
  controllers: [UserController],
  providers: [UserRepository, EmailIsUniqueValidator],
  exports: [UserModule]
})

export class UserModule {}