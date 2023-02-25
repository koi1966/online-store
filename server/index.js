// import {config} from "dotenv";
require('dotenv').config()

const express = require('express')

const sequelize = require('./db')
const models = require('./models/models') //  Ctrl + s
const PORT = process.env.PORT || 5000

const app = express()

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        // eslint-disable-next-line no-template-curly-in-string
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    }catch (e) {
        console.log(e)
    }
}

start()