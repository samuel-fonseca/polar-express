import express, { NextFunction, Request, Response } from 'express';
import RouteCount from '../../Models/RouteCount';

const router = express.Router()

router.use((req: Request, res: Response, next: NextFunction) => {
    
    RouteCount.findOrCreate({
        where: {
            url: req.url,
            method: req.method,
        },
        defaults: {
            url: req.url,
            hits: 1,
            method: req.method,
        },
    }).then(([count, created]) => {
        if (!created) {
            count.hits += 1;    
            count.save()
        }
    }).finally(() => next())

})

export default router
