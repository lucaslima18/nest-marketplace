import { IsEmail, IsNotEmpty, IsString, IsStrongPassword, MinLength } from "class-validator";

export class CreateUserDTO {
  @IsString({message: "o nome de usuário deve ser do tipo string"})
  @IsNotEmpty({message: "o nome de usuário não pode ser vazio"})
  name: string;

  @IsEmail({}, {message: 'O e-mail informado é inválido'})
  @IsNotEmpty({message: "o email não pode ser vazio"})
  email: string;

  @MinLength(6, {message: "a senha deve conter no mínimo 6 caracteres"})
  @IsStrongPassword(null, {message: "O password está fraco, tente inserir letras minúsculas, maiúsculas, números e caracteres especiais"})
  @IsNotEmpty({message: "o password não pode ser vazio"})
  password: string;
}