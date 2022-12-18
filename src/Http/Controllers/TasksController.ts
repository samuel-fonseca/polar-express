import { Request, Response } from 'express';
import Task from '../../Models/Task'
import TaskRequest from '../../Requests/TaskRequest';
import TaskResource from '../Resources/TaskResource'

const TasksController = {
    async index(req: Request, res: Response) {
        const tasks = await Task.findAll()

        res.json(
            tasks.map((task) => TaskResource.toJson(task))
        )
    },

    async get(req: Request, res: Response) {
        const { id } = req.params
        const task = await Task.findOne({ where: { id } })

        if (!task) {
            res.status(404).send({
                message: 'Could not find task.'
            })

            return
        }

        res.json(TaskResource.toJson(task))
    },

    async store(req: Request, res: Response) {
        const task = await TaskRequest.save(req, res)

        res.json(
            TaskResource.toJson(task)
        )
    },

    async update(req: Request, res: Response) {
        const { id } = req.params

        const task = await Task.findOne({ where: { id } })

        if (task == null) {
            res.status(404).send({
                message: 'Could not find task.'
            })

            return
        }

        try {
            task.update(req.body)
                .then(() => task.reload())

            res.json(TaskResource.toJson(task))
        } catch (err) {
            res.json({
                message: 'Task could not be updated.',
                error: err,
            })
        }
    },

    async destroy(req: Request, res: Response) {
        const { id } = req.params

        try {
            await Task.destroy({ where: { id } })

            res.json({ message: 'Task deleted.' })
        } catch (err) {
            res.status(422).send({
                message: 'Task could not be deleted',
                error: err,
            })
        }
    },
}

export default TasksController;
