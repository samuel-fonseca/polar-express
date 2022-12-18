import Task from '../../Contracts/Task'

const TaskResource = {
    toJson(task: Task) {
        return {
            id: task.id,
            user_id: task.user_id,
            name: task.name,
            completed: task.completed
        }
    }
}

export default TaskResource
