import { Model } from 'sequelize'

export default interface RouteCount extends Model {
    id: number,
    url: string,
    hits: number,
    method: string,
}
