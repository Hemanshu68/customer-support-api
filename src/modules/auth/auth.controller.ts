import { JwtAuthGuard } from './jwt-auth.guard';
import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import {
    ApiCreatedResponse,
    ApiTags,
    ApiUnauthorizedResponse,
} from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @ApiCreatedResponse({ description: 'User has logged in Sucessfully!' })
    @ApiUnauthorizedResponse({ description: 'User unauthorized!' })
    @Post('login')
    async login(@Request() req): Promise<any> {
        return this.authService.generateToken(req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Get('user')
    user(@Request() req) {
        return req.user;
    }
}
