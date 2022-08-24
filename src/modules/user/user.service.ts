import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRegistrationDto } from 'src/modules/user/user.req.dto';
import { User } from 'src/modules/user/user.entity';
import { UserRepository } from 'src/modules/user/user.repository';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: UserRepository,
    ) {}

    async doUserRegistration(data: UserRegistrationDto) {
        const user = new User();
        user.name = data.name;
        user.email = data.email;
        user.role = data.role;
        user.password = data.password;
        console.log(user);
        return await this.userRepository.save(user);
    }
    async findAll() {
        return await this.userRepository.findAndCount();
    }

    async getUserByEmail(email: string): Promise<User | undefined> {
        const user = await this.userRepository.findOne({
            where: {
                email,
            },
        });
        console.log(user);
        return user;
    }
}
