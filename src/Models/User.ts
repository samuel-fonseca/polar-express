import User from '../Contracts/User'
import { Model, DataTypes } from './Model'

const Task = Model.define<User>('tasks', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_login_at: {
        type: DataTypes.DATE,
        allowNull: true
    },
}, {
    timestamps: true
})

Task.sync()

export default Task
