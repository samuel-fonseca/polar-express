import { Model, DataTypes } from './Model'
import Task from '../Contracts/Task'

const Task = Model.define<Task>('tasks', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    completed: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
}, {
    timestamps: true
})

Task.sync()

export default Task
