"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
class UserRepository {
    constructor() {
        this.users = [];
    }
    async saveUser(user) {
        this.users.push(user);
        console.log(this.users);
    }
    async listUsers() {
        return this.users;
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map