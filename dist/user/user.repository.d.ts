export declare class UserRepository {
    private users;
    saveUser(user: any): Promise<void>;
    listUsers(): Promise<any[]>;
}
