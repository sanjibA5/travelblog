const express = require('express')
const dotenv= require('dotenv').config()

const {DB_CONNECT} = require('./db/connect')

const app= express()

// db url
const DB_connect_URL= `mongodb+srv://sanjib:${process.env.DB_PASSWORD}@cluster0.5x2mffq.mongodb.net/${process.env.DB_NAME}`

DB_CONNECT(DB_connect_URL); // database connect


const PORT=process.env.PORT || 8000
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})