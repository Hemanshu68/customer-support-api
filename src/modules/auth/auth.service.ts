import {
    BadRequestException,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private readonly jwtService: JwtService,
    ) {}

    async validateUserCreds(email: string, password: string): Promise<any> {
        const user = await this.userService.getUserByEmail(email);

        if (!user) throw new BadRequestException({ message: 'No user Found' });

        if (!(await bcrypt.compare(password, user.password)))
            throw new UnauthorizedException({ message: 'Password incorrect' });
        return user;
    }

    async generateToken(user: any) {
        return {
            access_token: this.jwtService.sign({
                name: user.name,
                sub: user.email,
            }),
        };
    }
}
