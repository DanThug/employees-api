"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
let UsersService = exports.UsersService = class UsersService {
    constructor() {
        this.users = [
            {
                "id": 1,
                "name": "Leanne Graham",
                "email": "sincere@april.biz",
                "role": "INTERN"
            },
            {
                "id": 2,
                "name": "Ervin Howell",
                "email": "shanna@melissa.tv",
                "role": "INTERN"
            },
            {
                "id": 3,
                "name": "Clementine Bauch",
                "email": "nathan@yesenia.net",
                "role": "ENGINEER"
            },
            {
                "id": 4,
                "name": "Patricia Lebsack",
                "email": "julianne.oconner@koy.org",
                "role": "ENGINEER"
            },
            {
                "id": 5,
                "name": "Chelsey Dietrich",
                "email": "lucio_hettinger@annie.ca",
                "role": "ADMIN"
            }
        ];
    }
    findAll(role) {
        const foundRoles = this.users.filter(user => user.role === role);
        if (foundRoles.length < 1)
            throw new common_1.NotFoundException('Role Not Found');
        return foundRoles;
    }
    findOne(id) {
        const user = this.users.find(user => user.id === id);
        if (!user)
            throw new common_1.NotFoundException('User Not Found');
        return user;
    }
    create(createUserDto) {
        const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id);
        const newUser = {
            id: usersByHighestId[0].id + 1, ...createUserDto
        };
        this.users.push(newUser);
        return newUser;
    }
    update(id, updateUserDto) {
        this.users = this.users.map(user => {
            if (user.id === id) {
                return { ...user, ...updateUserDto };
            }
            return user;
        });
        return this.findOne(id);
    }
    delete(id) {
        const removedUser = this.findOne(id);
        this.users = this.users.filter(user => user.id !== id);
        return removedUser;
    }
};
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
//# sourceMappingURL=users.service.js.map