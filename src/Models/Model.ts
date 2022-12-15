import { Sequelize, DataTypes } from "sequelize"
require('dotenv').config()

const host: string = process.env.DB_HOST ?? 'localhost'
const port: number = Number(process.env.DB_PORT ?? '5432')
const db: string = process.env.DB_NAME ?? 'polar_express'
const user: string = process.env.DB_USER ?? 'web'
const pass: string = process.env.DB_PASS ?? ''

const Model = new Sequelize(db, user, pass, {
    dialect: 'postgres',
    port,
    host,
})

Model.authenticate()

export {
    Model,
    Sequelize,
    DataTypes
}
