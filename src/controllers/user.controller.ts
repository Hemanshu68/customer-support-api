import { Body, Controller, Get, Post } from '@nestjs/common';
import { SETTINGS } from 'src/app.utils';
import { UserRegistrationDto } from 'src/dto/user.req.dto';
import { UserService } from 'src/services/user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Post('/register')
    async doUserRegistration(
        @Body(SETTINGS.VALIDATION_PIPE) userData: UserRegistrationDto,
    ) {
        return await this.userService.doUserRegistration(userData);
    }

    @Get('/all')
    async getAllUser() {
        return await this.userService.findAll();
    }
}
