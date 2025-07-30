import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const currentTime = new Date().toISOString();
    console.log(`[${currentTime}] ${req.method}${req.cookies.token});
 -- IP: ${req.ip}`);
    next();
  }
}
