import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { User } from 'src/users/userModle';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly AuthService: AuthService) { }

    @Post("login")
    async login(@Body() user: User, @Res() res: Response) {
        console.log('User login attempt:', user);

        const token = await this.AuthService.sigin(user, user.password);
        res.cookie('token', token, {
            httpOnly: true,
            secure: false,
            sameSite: 'lax',
            path: '/'
        })
        return res.send({ message: 'Login successful' });
    }

}