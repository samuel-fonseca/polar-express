import { Request, Response } from 'express';
import { check } from 'express-validator'
import Task from '../Models/Task'

const TaskRequest = {
    rules: [
        check('name').isString().notEmpty(),
        check('completed').isBoolean(),
    ],

    async save(req: Request, res: Response) : Promise<Task> {
        const { body } = req

        return await Task.create({
            name: body.name,
            completed: body.completed || false,
        })
    }
}

export default TaskRequest
