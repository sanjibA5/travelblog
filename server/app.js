const express = require('express')
const dotenv= require('dotenv').config()
const bodyParser= require('body-parser');
const cors=require('cors');

const {DB_CONNECT} = require('./db/connect');

const {postRoute }=require('./routes/post')

const app= express()

// middleware to spport client and server 
app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors())


// routing post
app.use('/api/v1/post',postRoute)

// atlas db url
const DB_connect_URL= `mongodb+srv://sanjib:${process.env.DB_PASSWORD}@cluster0.5x2mffq.mongodb.net/${process.env.DB_NAME}`

DB_CONNECT(DB_connect_URL); // database connect


const PORT=process.env.PORT || 8000
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})