import express from 'express'
import taskRoutes from './src/Routes/tasks'

const app: express.Application = express()
const port: number = 3000

app.use('/tasks', taskRoutes)

app.listen(port, () => {
    console.log(`Example app listening at https://localhost:${port}`)
})
