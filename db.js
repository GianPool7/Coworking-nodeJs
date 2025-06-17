import { Sequelize } from "sequelize";

export const sequelize=new Sequelize('coworking','postgres','postgres',{
    host:'localhost',
    dialect:'postgres'
})

