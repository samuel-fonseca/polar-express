import express, { Request, Response } from 'express'
const bodyParser = require('body-parser')

// middlewares
import counter from './src/Http/Middlewares/counter'
import validator from './src/Http/Middlewares/validator'
// routes
import taskRoutes from './src/Routes/tasks'

// create app
const app: express.Application = express()
const port: number = 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(counter)
app.use('/', (req: Request, res: Response) => {
    res.json({
        message: 'Welcome. Try to go to /tasks.',
    })
})
app.use('/tasks', taskRoutes)

app.listen(port, () => {
    console.log(`Polar Express listening at https://localhost:${port}`)
})
