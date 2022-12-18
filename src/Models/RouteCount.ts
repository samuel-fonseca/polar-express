import RouteCount from "../Contracts/RouteCount";
import { DataTypes, Model } from "./Model";

const RouteCount = Model.define<RouteCount>('route_counts', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    hits: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    method: {
        type: DataTypes.ENUM,
        values: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
        allowNull: false,
        defaultValue: 'get',
    },
})

RouteCount.sync()

export default RouteCount
