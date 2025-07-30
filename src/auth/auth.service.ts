import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/userModle';

@Injectable()
export class AuthService {
    constructor(private AppService: UsersService, private jwt: JwtService) { }

    async sigin(username: User, password: string): Promise<string> {
        const user: User | undefined = await this.AppService.findeUser(username.name)
        if (user?.password !== password) {
            throw new UnauthorizedException();
        }
        const payload = { username: user?.name, sub: user?.role, id: user?.id };
        const token = await this.jwt.signAsync(payload, {
            secret: process.env.JWT_SECRET,
        });
        console.log('Generated token:', token);
        return token;
    }
}


