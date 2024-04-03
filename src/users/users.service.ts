import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-ser.dto';

@Injectable()
export class UsersService {
    private users = [
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
    ]

    findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
        // if (role) {
        //     return this.users.filter(user => user.role === role)
        // }
        // return this.users
        const foundRoles = this.users.filter(user => user.role === role)
        if (foundRoles.length < 1) throw new NotFoundException('Role Not Found')

        return foundRoles
    }

    findOne(id: number) {
        const user = this.users.find(user => user.id === id)

        if (!user) throw new NotFoundException('User Not Found')

        return user
    }

    create(createUserDto: CreateUserDto) {
        const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id)
        const newUser = {
            id: usersByHighestId[0].id + 1, ...createUserDto
        }

        this.users.push(newUser)

        return newUser
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        this.users = this.users.map(user => {
            if(user.id === id) {
                return { ...user, ...updateUserDto}
            }

            return user
        })

        return this.findOne(id)
    }

    delete(id: number) {
        const removedUser = this.findOne(id)

        this.users = this.users.filter(user => user.id !== id)

        return removedUser
    }
}
