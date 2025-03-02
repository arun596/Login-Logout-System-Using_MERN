const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv').config();
require('./models/db')
const AuthRouter = require('./Routes/AuthRouter')
const cors = require('cors')
const app = express()
app.use(express.json())

const PORT = process.env.PORT  || 8080

app.use(bodyParser.json())
app.use(cors())

//router
app.use("/auth",AuthRouter)

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
    
})




