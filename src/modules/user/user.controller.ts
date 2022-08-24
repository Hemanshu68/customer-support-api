import { Body, Controller, Get, Post } from '@nestjs/common';
import { SETTINGS } from 'src/app.utils';
import { UserRegistrationDto } from 'src/modules/user/user.req.dto';
import { UserService } from 'src/modules/user/user.service';

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

    @Get('/getuser')
    async getUser(@Body() req: any) {
        const { email, password } = req;
        return await this.userService.getUserByEmail(email);
    }
}
