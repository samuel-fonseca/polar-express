import express, { Request, Response } from 'express'

// Tasks
import TasksController from '../Http/Controllers/TasksController'
import TaskRequest from '../Requests/TaskRequest'

const router = express.Router()

router.use((req: Request, res: Response, next) => {
    console.log(`Request made on ${new Date().toISOString()}`)
    next()
})

router.get(
    '/',
    (req: Request, res: Response) => TasksController.index(req, res)
)

router.get(
    '/:id',
    (req: Request, res: Response) => TasksController.get(req, res)
)

router.post(
    '/',
    TaskRequest.rules,
    (req: Request, res: Response) => TasksController.store(req, res)
)

router.put(
    '/:id',
    TaskRequest.rules,
    (req: Request, res: Response) => TasksController.update(req, res)
)

router.delete(
    '/:id',
    (req: Request, res: Response) => TasksController.destroy(req, res)
)

export default router
