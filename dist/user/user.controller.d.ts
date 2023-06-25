export declare class UserController {
    private userRepository;
    createUser(userData: any): Promise<{
        message: string;
        user_data: {
            user_name: any;
            user_email: any;
            user_password: any;
        };
    }>;
    listUsers(): Promise<{
        all_users: any[];
    }>;
}
