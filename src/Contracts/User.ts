import { Model } from 'sequelize'

export default interface User extends Model {
    id: number,
    first_name: string,
    last_name: string,
    username: string,
    email: string,
    password: string,
    api_key: string,
    last_login_at: string,
    created_at: string,
    updated_at: string,
}
