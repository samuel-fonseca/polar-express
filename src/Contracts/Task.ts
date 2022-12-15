import { Model } from 'sequelize'

export default interface Task extends Model {
    id: number,
    user_id: number,
    name: string,
    completed: boolean,
}
