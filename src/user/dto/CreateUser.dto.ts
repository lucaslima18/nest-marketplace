import { IsEmail, IsNotEmpty, IsString, IsStrongPassword, MinLength } from "class-validator";
import { emailIsUnique } from "../validator/EmailIsUnique.validator";

export class CreateUserDTO {
  @IsString({message: "o nome de usuário deve ser do tipo string"})
  @IsNotEmpty({message: "o nome de usuário não pode ser vazio"})
  name: string;

  @IsEmail(undefined, {message: 'O e-mail informado é inválido'})
  @IsNotEmpty({message: "o email não pode ser vazio"})
  @emailIsUnique({message: "já existe um usuário cadastrado com este email"})
  email: string;

  @MinLength(6, {message: "a senha deve conter no mínimo 6 caracteres"})
  @IsStrongPassword(null, {message: "O password está fraco, tente inserir letras minúsculas, maiúsculas, números e caracteres especiais"})
  @IsNotEmpty({message: "o password não pode ser vazio"})
  password: string;
}