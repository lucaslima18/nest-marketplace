import { CreateUserDTO } from "./dto/CreateUser.dto";
export declare class UserController {
    private userRepository;
    createUser(userData: CreateUserDTO): Promise<{
        message: string;
        user_data: {
            user_name: string;
            user_email: string;
            user_password: string;
        };
    }>;
    listUsers(): Promise<{
        all_users: any[];
    }>;
}
