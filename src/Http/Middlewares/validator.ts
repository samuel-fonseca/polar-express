import express, { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

const router = express.Router()

router.use((req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        console.log(errors)
        next(errors)
    }

    next()
})

export default router
