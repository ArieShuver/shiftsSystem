import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) { }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest() as Request & { user?: any };
    if (request.url === '/auth/login' && request.method === "POST") {
      return true;
    }
    const token = request.cookies?.token;
    if (!token) {
      throw new UnauthorizedException('Missing token in cookies');
    }
    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: process.env.JWT_SECRET,
      });
      request.user = payload;
      return true;
    } catch {
      console.log('process.env.JWT_SECRET', process.env.JWT_SECRET);
      console.log('Token:', token);

      console.error('Token verification failed');
      throw new UnauthorizedException('Invalid or expired token');
    }
  }
}
