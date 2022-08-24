import { NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';

export class RequestTypeMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        if (req?.body) {
            req.body['username'] = req.body['email'];
        }
        next();
    }
}
