import { Request, Response } from 'express';
import { check, validationResult } from 'express-validator'
import Task from '../Models/Task'

const TaskRequest = {
    rules: [
        check('name').isString().notEmpty(),
        check('completed').isBoolean(),
    ],

    async save(req: Request, res: Response) : Promise<Task> {
        const { body } = req
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            res.status(422).send({
                errors: errors.array()
            })
        }

        return await Task.create({
            name: body.name,
            completed: body.completed || false,
        })
    }
}

export default TaskRequest
